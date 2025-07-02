import React from "react";

type Props = {
  image: string;
  title: string;
  subHeading: string;
};

const FeaturesCard = ({ title, image, subHeading }: Props) => {
  return (
    <div className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer p-6 flex flex-col items-center text-center">
      {/* Image (icon style) */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-700 dark:group-hover:text-amber-300 transition-colors duration-200">
        {title}
      </h3>

      {/* Subheading */}
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {subHeading}
      </p>
    </div>
  );
};

export default FeaturesCard;
