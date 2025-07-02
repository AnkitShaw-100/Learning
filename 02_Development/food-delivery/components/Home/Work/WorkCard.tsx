import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  image: string;
  title: string;
  subHeading: string;
  start: string;
};

const WorkCard = ({ title, image, subHeading, start }: Props) => {
  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col">
      {/* Image */}
      <div className="w-full h-[180px] flex items-center justify-center p-4 bg-gray-50 dark:bg-zinc-800">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-cyan-700 dark:group-hover:text-amber-300 transition-colors duration-200">
          {title}
        </h3>

        {/* Subheading */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
          {subHeading}
        </p>

        {/* Call-to-action */}
        <button className="flex items-center space-x-2 text-sm sm:text-base font-semibold text-cyan-700 group-hover:text-cyan-900 dark:text-amber-400 dark:group-hover:text-amber-300 transition-all duration-300">
          <span>{start}</span>
          <FaArrowRight className="w-4 h-4 mt-[1px]" />
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
