import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const cards = [
  {
    title: "DATAMED RESEARCH",
    description: "L’Expertise au Service de Votre Transformation",
    image: assets.logoblue,
    link: "/esn/Accueil",
    external: false,
  },
  {
    title: "DATAMED ACADEMY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: assets.datamedacademy,
    link: "/esn/Accueil",
    external: false,
  },
  {
    title: "DATAMED CONNECT",
    description: "La Rencontre entre Talent et Opportunité",
    image: assets.datamedconnect,
    link: "https://datamedconnect.netlify.app/",
    external: true,
  },
];

const Card = ({ title, description, image, link, external }) => (
  <div className="w-[349px] h-[333px] space-y-4 flex flex-col items-center justify-center text-medium p-4 rounded-[15px] bg-white shadow-lg relative group">
    <img src={image} className="w-1/2" alt={title} loading="lazy" />
    <p className="text-black text-center font-montserrat text-[25px] font-semibold">{title}</p>
    <p className="text-[#02B1E0] text-center font-montserrat text-[16px] font-normal">{description}</p>
    {external ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-[-50px] h-[60px] flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#0DB7E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Voir Plus
        <ArrowIcon />
      </a>
    ) : (
      <NavLink
        to={link}
        className="absolute bottom-[-50px] h-[60px] flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#0DB7E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Voir Plus
        <ArrowIcon />
      </NavLink>
    )}
  </div>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5.833 14.167L14.167 5.833M14.167 5.833H5.833M14.167 5.833V14.167" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Hero = () => {
  return (  
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#F4F3FF] bg-cover bg-center sm:mb-10 space-y-10 sm:p-9"
      style={{ backgroundImage: `url(${assets.starts})` }}
    >
      <div className="space-y-8 sm:w-1/2 text-center mt-11">
        <motion.h1 className="font-montserrat text-[50px] sm:text-[90px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          {"DATAMED GROUP".split("").map((char, index) => (
            <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05, duration: 0.4 }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-black font-montserrat text-lg/8 font-normal">
          Chez DATAMED GROUPE, nous croyons en la puissance des données pour transformer les entreprises et façonner l’avenir.
          Forts d’une expertise pointue et d’une vision innovante, nous avons structuré notre groupe autour de trois piliers fondamentaux :
        </p>
      </div>
      <div className="sm:flex gap-y-6 items-center space-y-4 justify-center gap-4 w-full px-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Hero;