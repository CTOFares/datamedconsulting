import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Career/Hero";
import Contact from "../../Components/Career/Contact";
import Offers from "../../Components/Career/Offers";

const Career = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Contact />
      <Offers />
      <Footer />
    </div>
  );
};

export default Career;
