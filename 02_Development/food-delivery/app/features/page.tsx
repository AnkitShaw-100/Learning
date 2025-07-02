import React from "react";
import Features from "@/components/Home/Features/Features";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Explore Our Features
        </h2>
        <Features />
      </div>
    </div>
  );
};

export default FeaturesPage;
