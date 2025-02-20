import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b sm:mx-9   from-[#205198] to-[#0B1B32] text-white rounded-tl-[45px] rounded-tr-[45px]">
      <div className="sm:flex flex-col sm:p-9 mt-9 w-full">
        <h1 className="text-white text-center sm:text-start font-montserrat text-[40px] font-medium">
          Contact
        </h1>
        <div className="text-center sm:flex space-y-9 sm:space-y-0 sm:justify-between">
          <p className="text-white font-montserrat text-[18px] font-normal">
            Contact@consultingdatamed.com
          </p>
          <p className="text-white font-montserrat text-[18px] font-normal">
            +33 1 88 75 05 16
          </p>
          <p className="text-white font-montserrat text-[18px] text-center font-normal">
            185 Avenue du Général de Gaulle, Neuilly sur Seine, 92100
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white my-8"></div>
      <div className="sm:flex sm:justify-between sm:p-9 w-full pb-9">
        <p className="text-white font-montserrat text-xl font-medium leading-normal text-center md:text-left">
          © 2025 - Datamed Consulting - Site conçu par FARES SAFER
        </p>
        <div className="flex flex-col text-center md:flex-row gap-3 justify-center md:justify-center">
          <NavLink
            to="/politiquedeconfidentialite"
            className="text-white font-montserrat text-[16px] font-normal leading-[28px] underline decoration-solid"
          >
            Politique de confidentialité
          </NavLink>
          <NavLink
            to="/Mentionslegales"
            className="text-white font-montserrat text-[16px] font-normal leading-[28px] underline decoration-solid"
          >
            Mentions légales
          </NavLink>
          <NavLink
            to="/politiquedecookies"
            className="text-white font-montserrat text-[16px] font-normal leading-[28px] underline decoration-solid"
          >
            Politique de cookies
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
