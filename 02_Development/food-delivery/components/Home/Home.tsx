import React from "react";
import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant/Restaurant";
import Category from "./Category/Category";
import Work from "./Work/work";
import AboutUs from "./Aboutus/AboutUs";
import Features from "./Features/Features";
import AppDownload from "./AppDownload/AppDownload";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Restaurant />
      <Category />
      <Work />
      <AboutUs />
      <Features />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
