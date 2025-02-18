import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col mx-6 mt-2">
      <footer className="bg-gradient-to-b from-[#205198] to-[#0B1B32] text-white rounded-tl-[45px] rounded-tr-[45px] rounded-bl-none rounded-br-none p-16 mt-auto">
        {/* Contact Info Section */}
        <div className="mt-8 sm:mt-16">
          <p className="text-white font-montserrat text-xl text-center sm:text-left sm:text-6xl font-medium leading-normal">
            Contact
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white w-full sm:text-xl text-left text-xl mr-6  sm:w-1/3 font-montserrat  font-medium leading-normal sm:text-left">
              Contact@consultingdatamed.com
            </p>
            <p className="text-white w-full sm:w-1/3 font-montserrat text-xl font-medium leading-normal text-center sm:text-left">
              +33 1 88 75 05 16
            </p>
            <p className="text-white w-full sm:w-1/3 font-montserrat text-xl font-medium leading-normal text-center sm:text-left">
              191 Avenue du Général de Gaulle, Neuilly sur Seine, 92100
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white my-8"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white font-montserrat text-xl font-medium leading-normal text-center sm:text-left">
            © 2025 - Datamed Consulting - Site conçu par FARES SAFER
          </p>

          <div className="flex flex-col text-center sm:flex-row gap-3 justify-center sm:justify-center">
            <a
              to="/"
              className="text-white font-montserrat text-[16px] font-normal leading-[28px] underline decoration-solid"
            >
              Politique de confidentialité
            </a>
            <a
              to="/"
              className="text-white font-montserrat text-[16px] font-normal leading-[28px] underline decoration-solid"
            >
              Mentions légales
            </a>
            <a
              to="/"
              className="text-white font-montserrat text-[16px] font-normal leading-[28px] underline decoration-solid"
            >
              Politique de cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
