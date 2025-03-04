import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Home/Hero";
import Hero2 from "../../Components/Home/Hero2";
import Expertise from "../../Components/Home/Expertise";
import Values from "../../Components/Home/Values";
import Testimonials from "../../Components/Home/Testimonials";
import ConsultantSection from "../../Components/Home/ConsultantSection";
import Subscribe from "../../Components/Home/Subscribe";
import Clients from "../../Components/Home/Clients";
import Hero3 from "../../Components/Home/Hero3";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col ">
        <Hero3/>  
        {/* <Navbar /> */}
        {/* <Hero2/> */}
        {/* <Hero /> */}
        <Expertise />
        <Values />
        <Testimonials />
        <ConsultantSection />
        <Subscribe />
        <Clients/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
