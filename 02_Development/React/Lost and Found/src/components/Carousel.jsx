import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://preview.redd.it/1-month-completed-at-nit-durgapur-ama-v0-vrsfxq5ngzod1.jpg?width=4000&format=pjpg&auto=webp&s=4e46e2857b32dbc6a0d5fb57a678cfc7b03e51e6",
    alt: "Lost and Found Banner 1",
  },
  {
    src: "https://www.iiitd.ac.in/sites/all/themes/gavias_educar/images/slide-pl.jpg",
    alt: "Lost and Found Banner 2",
  },
  {
    src: "https://img.jagranjosh.com/images/2022/March/1132022/80328760_2577109765721519_2974020524675432448_n.jpg",
    alt: "Lost and Found Banner 3",
  },
];

const TailwindCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, delay);
    return () => resetTimeout();
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto mt-24 overflow-hidden rounded-xl shadow-xl"
      onMouseEnter={resetTimeout}
    >
      <div className="relative h-[450px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current].src}
            src={images[current].src}
            alt={images[current].alt}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover rounded-xl"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow transition duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow transition duration-300"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TailwindCarousel;

