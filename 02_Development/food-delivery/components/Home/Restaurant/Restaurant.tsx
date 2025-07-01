import React from "react";
import RestaurantCard from "./RestaurantCard";

const Restaurant = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section Heading */}
      <div className="text-xl sm:text-2xl text-center font-extrabold">
        Available Restaurants Nearby
      </div>

      {/* Card Grid */}
      <div className="w-[90%] xl:w-[80%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        <RestaurantCard
          image="/images/r1.jpg"
          title="Pizza Hut"
          dish="Veggie Loaded Cheese Pizza"
          price={399}
          rating={4.3}
          tags={["Veg", "Cheesy", "Best Seller"]}
        />
        <RestaurantCard
          image="/images/r2.jpg"
          title="Chipotle Mexican Grill"
          dish="Burrito Bowl with Guacamole"
          price={499}
          rating={4.5}
          tags={["Mexican", "Spicy", "Healthy"]}
        />
        <RestaurantCard
          image="/images/r3.jpg"
          title="McDonald's"
          dish="McChicken Burger with Fries"
          price={299}
          rating={4.1}
          tags={["Fast Food", "Combo", "Value"]}
        />
        <RestaurantCard
          image="/images/r4.jpg"
          title="The Baked Bear"
          dish="Custom Ice Cream Sandwich"
          price={249}
          rating={4.7}
          tags={["Dessert", "Cold", "Sweet Tooth"]}
        />
        <RestaurantCard
          image="/images/r5.jpg"
          title="Shake Shack"
          dish="Double Cheeseburger with Shake"
          price={559}
          rating={4.4}
          tags={["Burger", "American", "Juicy"]}
        />
        <RestaurantCard
          image="/images/r6.jpg"
          title="Chubby Noodle"
          dish="Kung Pao Noodles with Veggies"
          price={379}
          rating={4.6}
          tags={["Chinese", "Spicy", "Veg"]}
        />

        {/* Button */}
        <div className="col-span-full mt-12 text-center">
          <button className="px-9 py-2.5 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-bold text-base sm:text-lg bg-cyan-700 text-white hover:bg-cyan-950 transition-all duration-300 dark:bg-cyan-800 dark:hover:bg-cyan-600">
            Discover More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
