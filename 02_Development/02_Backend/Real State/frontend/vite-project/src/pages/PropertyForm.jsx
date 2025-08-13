import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    images: []
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/properties/${id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post("http://localhost:5000/api/properties", formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      navigate("/properties");
    } catch (err) {
      console.error(err);
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
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default PropertyForm;
