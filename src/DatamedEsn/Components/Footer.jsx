import React from "react";
import { BrowserRouter as Router, NavLink, Routes } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col h-auto mt-40">
      <footer className="bg-gradient-to-b from-[#205198] to-[#0B1B32] text-white rounded-tl-[45px] rounded-tr-[45px] rounded-bl-none rounded-br-none p-8 md:p-16 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <img
            src={assets.logowhite}
            alt="logowhite"
            className="w-[200px] md:w-[250px]"
          />
          <nav className="flex flex-col md:flex-row gap-4 text-center md:text-left">
            <NavLink
              to="/esn/accueil"
              className={({ isActive }) =>
                `font-montserrat ${isActive ? "underline" : ""}`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/esn/carriere"
              className={({ isActive }) =>
                `font-montserrat ${isActive ? "underline" : ""}`
              }
            >
              Carriére
            </NavLink>
            <NavLink
              to="/esn/Actualités"
              className={({ isActive }) =>
                `font-montserrat ${isActive ? "underline" : ""}`
              }
            >
              Actualités
            </NavLink>
            <NavLink
              to="/esn/Expertise"
              className={({ isActive }) =>
                `font-montserrat ${isActive ? "underline" : ""}`
              }
            >
              Expertises
            </NavLink>
            <NavLink
              to="/esn/contact"
              className={({ isActive }) =>
                `font-montserrat ${isActive ? "underline" : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>
          <div className="flex justify-center md:justify-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <circle cx="15" cy="15.5" r="15" fill="white" />
              <path
                d="M8.22154 22.5588H11.3056V12.5745H8.22154V22.5588Z"
                fill="black"
              />
              <path
                d="M7.94116 9.38696C7.94116 10.3713 8.73555 11.1682 9.76359 11.1682C10.7449 11.1682 11.5393 10.3713 11.5393 9.38696C11.5393 8.40259 10.7449 7.55884 9.76359 7.55884C8.73555 7.55884 7.94116 8.40259 7.94116 9.38696Z"
                fill="black"
              />
              <path
                d="M19.8103 22.5588H22.9412V17.0745C22.9412 14.4026 22.3337 12.2932 19.2028 12.2932C17.7075 12.2932 16.6795 13.137 16.2589 13.9338H16.2122V12.5745H13.2683V22.5588H16.3524V17.637C16.3524 16.3245 16.586 15.0588 18.2215 15.0588C19.8103 15.0588 19.8103 16.5588 19.8103 17.6838V22.5588Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                d="M30 15.5913C30 7.25456 23.2863 0.5 15 0.5C6.71371 0.5 0 7.25456 0 15.5913C0 23.1369 5.44355 29.4047 12.6411 30.5V19.9726H8.83064V15.5913H12.6411V12.3053C12.6411 8.53245 14.879 6.40264 18.2661 6.40264C19.9597 6.40264 21.6532 6.7069 21.6532 6.7069V10.4189H19.7782C17.9032 10.4189 17.2984 11.5751 17.2984 12.7921V15.5913H21.4718L20.8065 19.9726H17.2984V30.5C24.496 29.4047 30 23.1369 30 15.5913Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <circle cx="15" cy="15.5" r="15" fill="white" />
            </svg>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 md:mt-16">
          <p className="text-white font-montserrat text-xl text-center md:text-left md:text-4xl font-medium leading-normal">
            Contact
          </p>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white w-full md:text-xl text-left text-xl mr-6 md:w-1/3 font-montserrat font-medium leading-normal md:text-left">
              Contact@consultingdatamed.com
            </p>
            <p className="text-white w-full md:w-1/3 font-montserrat text-xl font-medium leading-normal text-center md:text-left">
              +33 1 88 75 05 16
            </p>
            <p className="text-white w-full md:w-1/3 font-montserrat text-xl font-medium leading-normal text-center md:text-left">
              191 Avenue du Général de Gaulle, Neuilly sur Seine, 92100
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white my-8"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
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
      </footer>
    </div>
  );
};

export default Footer;
