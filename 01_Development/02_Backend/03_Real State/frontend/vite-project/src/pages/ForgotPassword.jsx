import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [showToken, setShowToken] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/request-password-reset", { email });
      setToken(res.data.token);
      setShowToken(true);
      setMessage("Token generated. Copy it and use it to reset your password.");
    } catch (err) {
      setMessage("Error: " + (err.response?.data?.message || "Try again"));
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white p-2">Request Reset</button>
      </form>
      {showToken && (
        <div className="mt-4 bg-gray-100 p-2 rounded">
          <div className="text-xs text-gray-700">Token (for testing):</div>
          <div className="font-mono break-all">{token}</div>
        </div>
      )}
      {message && <div className="mt-2 text-red-600">{message}</div>}
    </div>
  );
};

export default ForgotPassword;
