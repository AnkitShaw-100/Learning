import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReportCard from "../components/ReportCard";
import Logo from "../assets/logo.png";
import Navbar from "./Navbar";

const fakeReports = [
    {
        image: "https://craftandglory.in/cdn/shop/products/DSC07927_1.jpg?v=1660802328&width=1946",
        product: "Wallet",
        category: "Accessories",
        location: "Library, 2nd floor",
        time: "10:30 AM",
        date: "2024-03-20",
        holder: "Security Desk",
    },
    {
        image: "https://media.istockphoto.com/id/1366615416/photo/folded-and-closed-black-fabric-umbrella-held-in-hand-by-man-close-up-studio-shot-isolated-on.jpg?s=612x612&w=0&k=20&c=dFj341XRTHFMXl1lv9W5nzod1tB9oc3_55jLBRz-E7M=",
        product: "Umbrella",
        category: "Daily Use",
        location: "Cafeteria",
        time: "2:00 PM",
        date: "2024-04-02",
        holder: "Reception",
    },
    {
        image: "https://media.istockphoto.com/id/1430390620/photo/apple-airpods-pro-2nd-generation-held-by-a-hand.jpg?s=612x612&w=0&k=20&c=QMQ1bwC-zpwfK91kUQMUBFkwHZkfULIfA5PeHgFXCWM=",
        product: "Headphones",
        category: "Electronics",
        location: "Gym Locker #3",
        time: "8:00 AM",
        date: "2024-03-28",
        holder: "Gym Staff",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWttCTo-Lx5f-DiBDTfPlboerWvTLzXsV6FQ&s",
        product: "Notebook",
        category: "Stationery",
        location: "Room A105",
        time: "3:45 PM",
        date: "2024-04-01",
        holder: "Lost & Found Desk",
    },
    {
        image: "https://craftandglory.in/cdn/shop/products/DSC07927_1.jpg?v=1660802328&width=1946",
        product: "Wallet",
        category: "Accessories",
        location: "Library, 2nd floor",
        time: "10:30 AM",
        date: "2024-03-20",
        holder: "Security Desk",
    },
    {
        image: "https://media.istockphoto.com/id/1366615416/photo/folded-and-closed-black-fabric-umbrella-held-in-hand-by-man-close-up-studio-shot-isolated-on.jpg?s=612x612&w=0&k=20&c=dFj341XRTHFMXl1lv9W5nzod1tB9oc3_55jLBRz-E7M=",
        product: "Umbrella",
        category: "Daily Use",
        location: "Cafeteria",
        time: "2:00 PM",
        date: "2024-04-02",
        holder: "Reception",
    },
];

const ReportPage = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Header */}
            <Navbar />
            <div className="min-h-screen px-6 py-10 bg-gray-100 mt-16">
                <div className="flex items-center justify-center gap-4 mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                        Reported Items
                    </h1>
                </div>

                {/* Reports Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mb-12">
                    {fakeReports.map((report, index) => (
                        <ReportCard key={index} report={report} />
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-6">
                    <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl shadow-lg font-semibold transform hover:scale-105 transition duration-300 hover:shadow-xl"
                        onClick={() => navigate("")}
                    >
                        Add Report
                    </button>
                    <button
                        className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>
                </div>

                {/* Footer */}
                <motion.footer
                    className="max-w-4xl mx-auto mt-16 text-center text-gray-600 text-sm"
                    initial="hidden"
                    animate="visible"
                >
                    Powered by College X • Built to reward honesty and responsibility © 2025
                </motion.footer>
            </div>
        </>
    );
};

export default ReportPage;
