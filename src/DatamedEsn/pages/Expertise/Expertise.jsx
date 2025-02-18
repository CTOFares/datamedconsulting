import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Expertise/Hero";
import Main from "../../Components/Expertise/Main";

const Expertise = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-4 sm:px-20">
      <Navbar />
      <Hero/>
      <Main/>
      <Footer />
    </div>
  );
};

export default Expertise;
