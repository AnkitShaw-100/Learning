import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
	const [form, setForm] = useState({
		title: "",
		description: "",
		price: "",
		location: "",
		propertyType: "house",
	});
	const [images, setImages] = useState([]);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		setImages([...e.target.files]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem("token");
		if (!token) {
			alert("Please login as a seller to add property");
			return;
		}

		// verify role is seller
		try {
			const me = await axios.get("http://localhost:5000/api/auth/me", { headers: { Authorization: `Bearer ${token}` } });
			if (!me.data || me.data.role !== "seller") {
				alert("Only sellers can add properties. Please login with a seller account.");
				return;
			}
		} catch (err) {
			alert("Failed to verify user. Please login again.");
			return;
		}
		const formData = new FormData();
		Object.entries(form).forEach(([key, value]) => formData.append(key, value));
		images.forEach((img) => formData.append("images", img));
		try {
			await axios.post(
				"http://localhost:5000/api/listings",
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			alert("Property added successfully!");
			navigate("/");
		} catch (err) {
			const msg = err?.response?.data?.message || err.message || "Error adding property";
			alert(msg);
		}
	};

	return (
		<div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
			<h2 className="text-2xl font-bold mb-4">Add New Property</h2>
			<form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
				<input
					type="text"
					name="title"
					placeholder="Title"
					className="border p-2 w-full"
					value={form.title}
					onChange={handleChange}
					required
				/>
				<textarea
					name="description"
					placeholder="Description"
					className="border p-2 w-full"
					value={form.description}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="price"
					placeholder="Price"
					className="border p-2 w-full"
					value={form.price}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="location"
					placeholder="Location"
					className="border p-2 w-full"
					value={form.location}
					onChange={handleChange}
					required
				/>
				<select
					name="propertyType"
					className="border p-2 w-full"
					value={form.propertyType}
					onChange={handleChange}
				>
					<option value="house">House</option>
					<option value="apartment">Apartment</option>
					<option value="land">Land</option>
					<option value="villa">Villa</option>
					<option value="office">Office</option>
				</select>
				<input
					type="file"
					name="images"
					accept="image/*"
					multiple
					className="border p-2 w-full"
					onChange={handleImageChange}
				/>
				<button className="bg-blue-600 text-white p-2 w-full">Add Property</button>
			</form>
		</div>
	);
};

export default AddProperty;
