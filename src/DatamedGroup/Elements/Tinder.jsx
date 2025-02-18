import React from "react";
import { assets } from "../../assets/assets";

const Tinder = () => {
  return (
    <div className=" h-[600px] w-auto bg-[#F4F3FF] rounded-[15px] my-20 mx-20 mt-[500px] items-center justify-center flex">
      <div className="w-1/2 items-center flex   justify-start h-full">
        <img src={assets.connect} cl alt="" />
      </div>
      <div className="w-1/2 p-20 space-y-4">
        <p className="text-[#1A1A1A] font-montserrat text-[42px] font-semibold leading-[52px] tracking-[-0.758px]">
          DATAMED CONNECT
        </p>
        <p className="text-[#767676] font-montserrat text-[20px] font-medium leading-[30px] tracking-[-0.361px]">
          DATAMED CVThèque est notre plateforme exclusive dédiée au recrutement
          et au placement des meilleurs talents dans le domaine IT et Data. Nous
          mettons en relation les entreprises en quête d’expertise et les
          professionnels à la recherche d’opportunités enrichissantes,
          garantissant ainsi une parfaite adéquation entre les compétences et
          les besoins du marché.
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
    </div>
  );
};

export default Tinder;
