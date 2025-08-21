import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const HomePage = () => {
    return (
        <>
            <Navbar />

            <div>
                {/* Carousel Section */}
                <Carousel />

                {/* Slogan Section */}
                <div className="max-w-4xl mx-auto text-center mt-16 px-4">
                    <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-3">Your Campus Lost & Found Partner</h2>
                        <p className="text-lg">
                            FoundIt helps you easily report, find, and track lost items in your campus community.
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4">
                    {/* Lost Card */}
                    <div
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 cursor-pointer border border-yellow-300"
                        onClick={() => window.location.href = "/lostitemform"}
                    >
                        <h3 className="text-2xl font-semibold text-yellow-500 mb-3">Lost</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Lost something? Tell us <strong>where</strong> and <strong>when</strong> so we can help you get it back.
                        </p>
                    </div>

                    {/* Report Card */}
                    <div
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 cursor-pointer border border-yellow-300"
                        onClick={() => window.location.href = "/reportpage"}
                    >
                        <h3 className="text-2xl font-semibold text-yellow-500 mb-3">Report</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            All <strong>Reported item</strong> by students in your community.
                        </p>
                    </div>

                    {/* Found Card */}
                    <div
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 cursor-pointer border border-yellow-300"
                        onClick={() => window.location.href = "/Founditempage"}
                    >
                        <h3 className="text-2xl font-semibold text-yellow-500 mb-3">Found</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            <strong>Celebrate success!</strong> See how many lost items have been returned through our platform.
                        </p>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="mt-20 bg-gray-900 text-gray-100 text-center py-6 rounded-t-2xl shadow-inner">
                    &copy; {new Date().getFullYear()} <span className="font-semibold">FoundIt</span>. All rights reserved.
                </footer>
            </div>
        </>
    );
};

export default HomePage;
