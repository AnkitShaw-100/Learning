import React from "react";
import AboutUs from "@/components/Home/Aboutus/AboutUs";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-white px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto py-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Learn more about our mission, values, and the team behind Foodie — your trusted food delivery platform.
        </p>

        {/* About Us Component */}
        <AboutUs />
      </main>
    </div>
  );
};

export default AboutPage;
