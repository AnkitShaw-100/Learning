import React, { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/reset-password", { token, password });
      setMessage("Password reset successful! You can now login.");
    } catch (err) {
      setMessage("Error: " + (err.response?.data?.message || "Try again"));
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter reset token"
          className="border p-2"
          value={token}
          onChange={e => setToken(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New password"
          className="border p-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="bg-green-600 text-white p-2">Reset Password</button>
      </form>
      {message && <div className="mt-2 text-blue-600">{message}</div>}
    </div>
  );
};

export default ResetPassword;
