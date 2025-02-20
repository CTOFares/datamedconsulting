import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Home/Hero";
import Expertise from "../../Components/Home/Expertise";
import Values from "../../Components/Home/Values";
import Testimonials from "../../Components/Home/Testimonials";
import ConsultantSection from "../../Components/Home/ConsultantSection";
import Subscribe from "../../Components/Home/Subscribe";
import Clients from "../../Components/Home/Clients";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col px-4 sm:px-20">
        <Navbar />
        <Hero />
        <Clients/>
        <Expertise />
        <Values />
        <Testimonials />
        <ConsultantSection />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
