import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { NavLink } from "react-router-dom";

const Hero3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:flex min-h-screen">
      {/* Navbar */}
      <div className="w-auto flex justify-between mt-5 mx-12 mb-5 items-center text-white absolute top-0 left-0 right-0 z-50">
        <div className="flex w-full justify-between">
          <div className="flex gap-6 items-center">
            <NavLink to="/">
              <img src={assets.logowhite} alt="logo bleu" />
            </NavLink>

            <nav className="p-4 hidden sm:flex text-white gap-4">
              <NavLink
                to="/esn/Accueil"
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
                Carrière
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
            </nav>
          </div>
          <NavLink
            to="/esn/contact"
            className="hidden sm:block items-center text-white justify-center"
          >
            <button className="flex w-[174px] h-[48px] px-[19px] py-[13px] justify-center  items-center gap-[10px] shrink-0 rounded-[14px] bg-[#173A6D]">
              <p className="font-montserrat text-white">Contactez Nous</p>
            </button>
          </NavLink>
        </div>
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="sm:hidden absolute top-16 left-0 right-0 bg-white text-black p-4 z-40">
            <nav className="flex flex-col gap-4">
              <NavLink
                to="/esn/Accueil"
                className={({ isActive }) =>
                  `font-montserrat ${isActive ? "underline" : ""}`
                }
                onClick={toggleMenu}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/esn/carriere"
                className={({ isActive }) =>
                  `font-montserrat ${isActive ? "underline" : ""}`
                }
                onClick={toggleMenu}
              >
                Carrière
              </NavLink>
              <NavLink
                to="/esn/Actualités"
                className={({ isActive }) =>
                  `font-montserrat ${isActive ? "underline" : ""}`
                }
                onClick={toggleMenu}
              >
                Actualités
              </NavLink>
              <NavLink
                to="/esn/Expertise"
                className={({ isActive }) =>
                  `font-montserrat ${isActive ? "underline" : ""}`
                }
                onClick={toggleMenu}
              >
                Expertises
              </NavLink>
              <NavLink
                to="/esn/Contact"
                className={({ isActive }) =>
                  `font-montserrat ${isActive ? "underline" : ""}`
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="w-1/2 max-h-screen shrink-0 bg-gradient-to-br from-[#173A6D] via-[#173A6D] to-[#2D70D3] flex flex-col pt-24">
        <div className="p-12 pt-10 space-y-5  flex-1">
          <p className="text-white font-montserrat text-[16px] font-normal leading-[120.402%]">
            Un cabinet unique de conseil en IT
          </p>
          <h1 className="text-[#FBFBFB] font-montserrat text-[80px] font-bold leading-[80px]">
            Shaping Your Future
          </h1>
          <p className="text-white font-montserrat text-[16px] font-normal leading-[120.402%]">
            DATAMED Consulting est un cabinet de conseil en IT, amateur d’une
            culture « Geek » et d’une amélioration constante. Nous anticipons
            les futures technologies et surfons sur les grands changements en
            matière de digital, de sécurité et d’innovation.
          </p>
          <button className="flex w-[174px] h-[48px] px-[19px] py-[13px] text-white justify-center items-center gap-[10px] rounded-[14px] bg-[#0CB6E2]">
            Contactez-Nous
          </button>
        </div>

        <div className="w-full h-auto gap-5 flex rounded-[0px_20px_0px_0px] bg-white self-end">
          <div className="p-9">
            <h2 className="font-montserrat text-[60px] font-semibold leading-[120.402%] bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              50+
            </h2>
            <p className="text-[#333] font-montserrat text-[24px] font-bold leading-normal">
              Client
            </p>
          </div>
          <div className="p-9">
            <h2 className="font-montserrat text-[60px] font-semibold leading-[120.402%] bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              4
            </h2>
            <p className="text-[#333] font-montserrat text-[24px] font-bold leading-normal">
              Expertise
            </p>
          </div>
          <div className="p-9">
            <h2 className="font-montserrat text-[60px] font-semibold leading-[120.402%] bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              200K
            </h2>
            <p className="text-[#333] font-montserrat text-[24px] font-bold leading-normal">
              Consultant
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-1/2 max-h-screen">
        <img
          src={assets.Hero1}
          className="w-full max-h-screen object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero3;
