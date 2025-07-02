import React from "react";
import Restaurant from "@/components/Home/Restaurant/Restaurant";

const RestaurantPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-white px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto py-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
          Explore Our Top Restaurants
        </h1>
        <p className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Browse from the best food places in your area and enjoy fast delivery, fresh flavors, and great service.
        </p>

        {/* Restaurant Component */}
        <Restaurant />
      </main>
    </div>
  );
};

export default RestaurantPage;
