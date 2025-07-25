import React, { useState } from "react";
import { motion } from "framer-motion";

const SellerSignup: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Seller Info Submitted:", form);
    // Connect to backend or API here
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 py-20 relative">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-25 pointer-events-none"></div>

      {/* Form Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-3xl px-8 sm:px-12 py-12 space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 drop-shadow-sm">
          Seller Signup
        </h2>
        <p className="text-center text-gray-700 text-sm mb-4">
          Join us to list and manage your properties with ease.
        </p>

        <div className="space-y-5">
          {[
            { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe" },
            { name: "email", label: "Email Address", type: "email", placeholder: "example@domain.com" },
            { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
            { name: "password", label: "Password", type: "password", placeholder: "••••••••" },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name} className="flex flex-col">
              <label htmlFor={name} className="text-sm font-semibold text-gray-800 mb-1">
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className="px-4 py-3 rounded-xl border border-gray-300 bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition-all"
        >
          Register as Seller
        </button>
      </motion.form>
    </section>
  );
};

export default SellerSignup;
