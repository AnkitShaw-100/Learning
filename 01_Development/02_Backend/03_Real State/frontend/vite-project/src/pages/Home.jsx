import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homePage from "../assets/homePage.jpg";
import Benefits from "./Benfits";
import TestimonialsPage from "./TestimonialsPage";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    if (minPrice !== "") params.set("minPrice", minPrice);
    if (maxPrice !== "") params.set("maxPrice", maxPrice);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="w-full bg-gray-50 font-sans">
      {/* Full width hero background */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${homePage})` }}
      >
        <section className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-32 md:pt-36 md:pb-40 rounded-b-3xl">
          <div className="text-center mb-10 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Find Your Perfect Property
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Search homes by location and price range
            </p>
          </div>

          {/* Enhanced Search Form */}
          <form 
            onSubmit={handleSearch} 
            className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-4xl mx-auto border border-white/20"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Location Field */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <input
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="City, neighborhood, or address"
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all shadow-sm hover:shadow-md text-gray-700 placeholder-gray-400"
                  />
                  <svg 
                    className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Price Range Fields */}
              <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl">
                <div className="relative bg-white rounded-lg shadow-sm px-4 py-3 flex items-center w-32 md:w-36 transition-all hover:shadow-md">
                  <span className="text-gray-500 mr-2">₹</span>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    placeholder="Min"
                    className="w-full bg-transparent outline-none text-gray-700 font-medium placeholder-gray-400"
                    min={0}
                  />
                </div>
                <div className="text-gray-400">—</div>
                <div className="relative bg-white rounded-lg shadow-sm px-4 py-3 flex items-center w-32 md:w-36 transition-all hover:shadow-md">
                  <span className="text-gray-500 mr-2">₹</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    placeholder="Max"
                    className="w-full bg-transparent outline-none text-gray-700 font-medium placeholder-gray-400"
                    min={0}
                  />
                </div>
              </div>

              {/* Search Button */}
              <button 
                type="submit" 
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all whitespace-nowrap shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </form>
        </section>
      </div>

      {/* Benefits section anchor */}
      <div id="benefits">
        <Benefits />
      </div>

      {/* Testimonials anchor */}
      <div id="testimonials">
        <TestimonialsPage />
      </div>

      {/* Footer anchor */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;