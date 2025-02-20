import React from "react";
import { assets } from "../../assets/assets";

const AcSection = () => {
  return (
    <div className="relative w-auto bg-[#F4F3FF] rounded-[15px]    mx-20 items-center justify-center">
      <div className="p-20 h-[600px] space-y-4   flex flex-col items-center justify-center">
        <p className="text-[#1A1A1A] font-montserrat text-[42px] font-semibold leading-[52px] tracking-[-0.758px]">
          DATAMED UNIVERSITY
        </p>
        <p className="text-[#767676] text-center w-1/2 font-montserrat text-[20px] font-medium leading-[30px] tracking-[-0.361px]">
          Parce que le savoir est la clé de l’évolution, DATAMED University
          propose des formations spécialisées dans les domaines du numérique, de
          la data et de la gestion de projets. Destinée aux professionnels et
          aux étudiants, notre université s’engage à développer des compétences
          pointues et adaptées aux exigences du marché de l’emploi.
        </p>
        <button className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* <div className="w-full absolute left-0 -bottom-1/2   flex items-center justify-center">
        <img src={assets.tindercover} className="" alt="" />
      </div> */}
    </div>
  );
};

export default AcSection;
