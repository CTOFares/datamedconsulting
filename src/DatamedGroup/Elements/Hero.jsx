import React from "react";

import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="min-h-screen justify-center bg-[#F4F3FF] bg-cover bg-center sm:mb-10 space-y-10 items-center sm:p-9 flex flex-col"
      style={{ backgroundImage: `url(${assets.starts})` }}
    >
      <div className="space-y-8 sm:w-1/2 text-center mt-11">
        <motion.h1 className="text-center font-montserrat text-[50px] sm:text-[90px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          {"DATAMED GROUP".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className=" text-black items-center w-full   text-center font-montserrat text-[20px] sm:text-[20px] font-normal leading-[120.402%]">
          Chez DATAMED GROUPE, nous croyons en la puissance des données pour
          transformer les entreprises et façonner l’avenir. Forts d’une
          expertise pointue et d’une vision innovante, nous avons structuré
          notre groupe autour de trois piliers fondamentaux :
        </p>
      </div>
      <div className="sm:flex gap-y-6 items-center justify-center gap-4  w-full px-6">
        <div className="w-[349px] h-[333px] space-y-4 items-center flex flex-col justify-center text-medium p-4  rounded-[15px] bg-white shadow-[0px_403px_113px_0px_rgba(23,58,109,0.00),0px_258px_103px_0px_rgba(23,58,109,0.01),0px_145px_87px_0px_rgba(23,58,109,0.05),0px_64px_64px_0px_rgba(23,58,109,0.09),0px_16px_35px_0px_rgba(23,58,109,0.10)] relative group">
          <img src={assets.logoblue} className="w-1/2" alt="" />
          <p className="text-black text-center font-montserrat text-[25px] font-semibold leading-[120.402%]">
            DATAMED RESEARCH
          </p>
          <p className="text-[#02B1E0] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
            L’Expertise au Service de Votre Transformation
          </p>

          <NavLink
            className="absolute bottom-[-50px] h-[60px] flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#0DB7E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            to="/esn/Accueil"
            
          >
            Voir Plus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83331 14.1666L14.1666 5.83325M14.1666 5.83325H5.83331M14.1666 5.83325V14.1666"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </div>
        <div className="w-[349px] h-[333px] space-y-4 items-center flex flex-col justify-center text-medium p-4   rounded-[15px] bg-white shadow-[0px_403px_113px_0px_rgba(23,58,109,0.00),0px_258px_103px_0px_rgba(23,58,109,0.01),0px_145px_87px_0px_rgba(23,58,109,0.05),0px_64px_64px_0px_rgba(23,58,109,0.09),0px_16px_35px_0px_rgba(23,58,109,0.10)] relative group">
          <img src={assets.datamedacademy} className="w-1/2" alt="" />
          <p
            className="text-black text-center font-montserrat text-[25px] font-semibold leading-[120.402%]"
            to="/esn/Accueil"
          >
            DATAMED ACADEMY
          </p>
          <p className="text-[#02B1E0] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
            Former les Experts de Demain{" "}
          </p>

          {/* a appears above the div but under the paragraph */}
          <NavLink
            to="/esn/Accueil"
            className="absolute bottom-[-50px] h-[60px] flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#0DB7E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Voir Plus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83331 14.1666L14.1666 5.83325M14.1666 5.83325H5.83331M14.1666 5.83325V14.1666"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </div>
        <div className="w-[349px] h-[333px] space-y-4 items-center flex flex-col justify-center text-medium p-4   rounded-[15px] bg-white shadow-[0px_403px_113px_0px_rgba(23,58,109,0.00),0px_258px_103px_0px_rgba(23,58,109,0.01),0px_145px_87px_0px_rgba(23,58,109,0.05),0px_64px_64px_0px_rgba(23,58,109,0.09),0px_16px_35px_0px_rgba(23,58,109,0.10)] relative group">
          <img src={assets.datamedconnect} className="w-1/2" alt="" />
          <p className="text-black text-center font-montserrat text-[25px] font-semibold leading-[120.402%]">
            DATAMED CONNECT
          </p>
          <p className="text-[#02B1E0] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
            La Rencontre entre Talent et Opportunité{" "}
          </p>

          {/* a appears above the div but under the paragraph */}
          <a
            href="https://datamedconnect.netlify.app/"
            target="_blank"
            className="absolute bottom-[-50px] h-[60px] flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#0DB7E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Voir Plus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83331 14.1666L14.1666 5.83325M14.1666 5.83325H5.83331M14.1666 5.83325V14.1666"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
