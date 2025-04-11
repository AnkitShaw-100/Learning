import React, { useState } from "react";
import { motion } from "framer-motion"; 
import Logo from "../assets/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate login process
    console.log({ email, password });

    setTimeout(() => {
      alert("Login successful!");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-8 text-center"
      >
        {/* Scale animation */}
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-24 h-24 mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        />

        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Login
        </motion.h2>

        {/* Input fields with slide-in animation */}
        <motion.div
          className="flex flex-col text-left mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <label className="mb-1 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </motion.div>

        <motion.div
          className="flex flex-col text-left mb-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <label className="mb-1 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </motion.div>

        {/* Submit button with hover animation */}
        <motion.button
          type="submit"
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-white w-full py-2 rounded hover:bg-yellow-500 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          disabled={submitting}
        >
          {submitting ? "Logging in..." : "Login"}
        </motion.button>

        {/* Sign-up link with fade-in animation */}
        <motion.p
          className="mt-4 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-yellow-500 hover:underline font-medium"
          >
            Sign up
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginPage;