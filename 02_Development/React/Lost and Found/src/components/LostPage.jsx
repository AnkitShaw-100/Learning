import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png"; // Import the logo
import Navbar from "./Navbar";

const LostItemPage = () => {
    const [formData, setFormData] = useState({
        location: "",
        time: "",
        date: "",
        holderName: "",
    });

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        console.log("Lost Item Data:", formData);

        setTimeout(() => {
            alert("Lost item submitted!");
            setSubmitting(false);
        }, 1000);
    };

    const fadeInVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-lg shadow-md p-8 w-full max-w-md"
                >
                    {/* Logo with bounce animation */}
                    <motion.img
                        src={Logo}
                        alt="Logo"
                        className="w-20 h-20 mx-auto mb-4"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                        }}
                    />

                    <h2 className="text-2xl font-semibold text-center mb-6">
                        Report Lost Item
                    </h2>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInVariant}>
                            <label className="block mb-1 font-medium">Location</label>
                            <motion.input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                        </motion.div>

                        <motion.div variants={fadeInVariant}>
                            <label className="block mb-1 font-medium">Time</label>
                            <motion.input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                        </motion.div>

                        <motion.div variants={fadeInVariant}>
                            <label className="block mb-1 font-medium">Date</label>
                            <motion.input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                        </motion.div>

                        <motion.div variants={fadeInVariant}>
                            <label className="block mb-1 font-medium">Holder's Name</label>
                            <motion.input
                                type="text"
                                name="holderName"
                                value={formData.holderName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                        </motion.div>

                        <motion.div className="mt-6 flex justify-center">
                            <motion.button
                                type="submit"
                                className="bg-yellow-400 text-white w-full py-2 rounded hover:bg-yellow-500 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={submitting}
                            >
                                {submitting ? "Submitting..." : "Submit"}
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </motion.div>

            </div>
        </>
    );
};

export default LostItemPage;