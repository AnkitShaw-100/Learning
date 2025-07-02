import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const FoundStatsPage = () => {
  const totalReported = 58;
  const deliveredItems = 42;
  const waitingItems = totalReported - deliveredItems;

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow mt-24 px-4">
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-yellow-500 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Found Items Summary
        </motion.h1>

        {/* Stat Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              label: "Total Reported",
              value: totalReported,
              color: "text-yellow-500 border-yellow-300",
            },
            {
              label: "Delivered",
              value: deliveredItems,
              color: "text-green-500 border-green-300",
            },
            {
              label: "Waiting",
              value: waitingItems,
              color: "text-red-500 border-red-300",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className={`bg-white rounded-2xl shadow-md p-6 border ${item.color} text-center`}
            >
              <h2 className="text-xl font-medium text-gray-700 mb-2">{item.label}</h2>
              <p className={`text-4xl font-bold ${item.color}`}>{item.value}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 text-center py-6 mt-auto rounded-t-2xl shadow-inner">
        &copy; {new Date().getFullYear()} <span className="font-semibold">FoundIt</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default FoundStatsPage;
