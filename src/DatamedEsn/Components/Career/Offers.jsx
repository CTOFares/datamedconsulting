import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Element from "./Element";
import { careers } from "../../../assets/assets";

const Offers = () => {
  const navigate = useNavigate(); // ✅ Define navigate function

  return (
    <div className="space-y-9 mt-9 mb-5  px-4 sm:px-20">
      <div className="flex items-center justify-between w-full">
        <p className="text-[30px] sm:text-[40px] font-montserrat uppercase font-semibold leading-[120.402%] text-center bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          Nos Offres
        </p>
        <div className="flex items-center gap-3">
          <a
            onClick={() => navigate(`/esn/carriere`)}
            className="text-[16px] font-lato font-normal text-black"
          >
            Voir plus
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.8335 14.1667L14.1668 5.83337M14.1668 5.83337H5.8335M14.1668 5.83337V14.1667"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-2 space-y-5 sm:space-y-0  sm:grid-rows-2 gap-4 grid-cols-1 grid-rows-4">
          {careers.map((offre) => (
            <div
              key={offre.id}
              onClick={() => navigate(`/esn/carriere/${offre.id}`)}
              className="cursor-pointer"
            >
              <Element Title={offre.titre} Paragraphe={offre.Taches} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
