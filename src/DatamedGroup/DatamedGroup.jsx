import React from "react";
import Hero from "./Elements/Hero";
import EsnSection from "./Elements/EsnSection";
import Tinder from "./Elements/Tinder";
import Footer from "./Elements/Footer";
import AcSection from "./Elements/AcSection";

const DatamedGroup = () => {
  return (
    <div className="w-full border-2 min-h-screen flex flex-col">
      {/* <Constraction/> */}
      <Hero />
      <EsnSection />
      <AcSection />
      <Tinder />
      <Footer />
    </div>
  );
};

export default DatamedGroup;
