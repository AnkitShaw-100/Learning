import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/auth/register", { name, email, password });
      alert("Registration successful, please login.");
    } catch (err) {
      alert("Error registering user");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-600 text-white p-2">Register</button>
      </form>
    </div>
  );
}
