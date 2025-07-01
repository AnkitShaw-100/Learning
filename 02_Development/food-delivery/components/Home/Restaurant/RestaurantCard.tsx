import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  title: string;
  image: string;
  dish: string;
  price: number;
  rating?: number;
  tags?: string[];
};

const RestaurantCard = ({ title, image, dish, price, rating = 4.5, tags = [] }: Props) => {
  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Restaurant Name */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-amber-300 transition-colors duration-200">
          {title}
        </h3>

        {/* Dish Name */}
        <p className="text-sm text-gray-600 dark:text-gray-300">{dish}</p>

        {/* Price + Rating Row */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <span className="text-md font-semibold text-gray-900 dark:text-white">
            ₹{price.toFixed(2)}
          </span>

          {/* Rating */}
          <div className="flex items-center space-x-1 text-yellow-500">
            <FaStar className="w-4 h-4" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{rating}</span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
