import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
  });
  const [imageFiles, setImageFiles] = useState([]);

  const { id } = useParams(); // if editing
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/properties/${id}`)
        .then(res => setFormData(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilesChange = (e) => {
    setImageFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update accepts JSON body (images update not supported here)
        await axios.put(`http://localhost:5000/api/properties/${id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        // Create listing with multipart/form-data to include images
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('location', formData.location);
        imageFiles.forEach((file) => data.append('images', file));

        await axios.post("http://localhost:5000/api/listings", data, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
  navigate("/dashboard");
    } catch (err) {
  console.error(err);
  const msg = err?.response?.data?.message || err.message || "Failed to create/update listing";
  alert(msg);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">{id ? "Edit Property" : "Add Property"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="border p-2 w-full" />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full" />
        {!id && (
          <input type="file" name="images" multiple accept="image/*" onChange={handleFilesChange} className="border p-2 w-full" />
        )}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default PropertyForm;
