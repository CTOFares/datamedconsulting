import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-auto flex justify-between mt-5 mb-5 items-center text-white">
      <div className="flex gap-6 items-center">
        <NavLink to="/">
          <img src={assets.logoblue} alt="logo bleu" />
        </NavLink>

        <nav className="p-4 hidden sm:flex text-black gap-4">
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
          <NavLink
            to="/esn/Contact"
            className={({ isActive }) =>
              `font-montserrat ${isActive ? "underline" : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="flex h-[45px] rounded-[14px] bg-[#FBE4E4] overflow-hidden">
        <div className="w-full px-4 flex items-center justify-center bg-[#173A6D] rounded-[14px]">
          <NavLink
            to="/esn/contact"
            className="text-white font-montserrat text-[16px] font-normal"
          >
            Contacter Nous
          </NavLink>
        </div>
      </div>
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
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
  );
};

export default Navbar;
