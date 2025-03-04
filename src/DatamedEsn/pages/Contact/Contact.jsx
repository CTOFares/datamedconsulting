import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MainContact from "../../Components/Contact/MainContact";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Navbar />
      <MainContact />
      <Footer />
    </div>
  );
};

export default Contact;
