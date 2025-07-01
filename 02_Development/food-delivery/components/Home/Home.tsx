import React from "react";
import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant/Restaurant";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Restaurant/>
      <Category />
    </div>
  );
};

export default Home;
