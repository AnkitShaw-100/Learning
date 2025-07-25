import React, { useState } from "react";
import { motion } from "framer-motion";

const BuyerSignup: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buyer Data:", form);
    // API logic here
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4 py-20 relative">
      {/* Background image with light overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-25"></div>

      {/* Glass effect card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] px-6 sm:px-10 py-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-10">
          Buyer Signup
        </h2>

        <div className="space-y-6">
          {[
            { name: "name", label: "Full Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "password", label: "Password", type: "password" },
            { name: "phone", label: "Phone Number", type: "tel" },
            { name: "city", label: "Preferred City", type: "text" },
          ].map(({ name, label, type }) => (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="mb-1 text-sm font-semibold text-gray-700"
              >
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all text-gray-800 bg-white/80 placeholder-gray-400"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition-all"
          >
            Create Buyer Account
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default BuyerSignup;
