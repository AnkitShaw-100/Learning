import React from "react";

const Categories = [
  { name: "Pizza" },
  { name: "Breakfast" },
  { name: "Japanese" },
  { name: "Halal" },
  { name: "Dessert" },
  { name: "Lebanese" },
  { name: "American" },
  { name: "Sushi" },
  { name: "Greek" },
  { name: "Thai" },
  { name: "Vegetarian" },
  { name: "Italian" },
  { name: "Mexican" },
  { name: "Indian" },
  { name: "Chinese" },
  { name: "Greek" },
  { name: "Thai" },
  { name: "Vegetarian" },
  { name: "Italian" },
  { name: "Mexican" },
];

const Category = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold mb-8">
        Popular Categories by Food
      </h1>

      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {Categories.map((category, i) => (
            <span
              key={i}
              className="px-6 py-3 rounded-full cursor-pointer bg-gray-100 dark:bg-zinc-800 dark:text-white text-gray-900 font-semibold text-base sm:text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
