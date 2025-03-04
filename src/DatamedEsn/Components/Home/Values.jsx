import React from "react";
import { assets, values } from "../../../assets/assets";

const Values = () => {
  return (
    <div className="mx-4 sm:mx-11 md:mx-[90px] mt-[90px] space-y-5  sm:px-10">
      <h1 className="text-center font-montserrat text-[24px] sm:text-[32px] md:text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
        Nos valeurs
      </h1>
      <div className="flex gird grid-cols-1 sm:grid-cols-3 gap-4 justify-between">
        <div className="w-[360px] h-[294px] flex-shrink-0 p-4 space-y-6 rounded-[10px] bg-[#FFFfFf] shadow-[0px_403px_113px_0px_rgba(23,58,109,0),0px_258px_103px_0px_rgba(23,58,109,0.01),0px_145px_87px_0px_rgba(23,58,109,0.05),0px_64px_64px_0px_rgba(23,58,109,0.09),0px_16px_35px_0px_rgba(23,58,109,0.1)]">
          <div className="flex w-[80px] h-[80px] p-[15px] justify-center items-center flex-shrink-0 rounded-[10px] bg-[#F6F6F6]">
            <img src={assets.check} alt="" />
          </div>
          <p className="text-[#0E1F51] font-montserrat text-[20px] font-extrabold leading-[26px]">
            Excellence
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="91"
            height="6"
            viewBox="0 0 91 6"
            fill="none"
          >
            <rect
              x="0.5"
              width="60"
              height="6"
              rx="3"
              fill="url(#paint0_linear_520_4937)"
            />
            <rect
              x="70.5"
              width="20"
              height="6"
              rx="3"
              fill="url(#paint1_linear_520_4937)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_520_4937"
                x1="0.5"
                y1="3"
                x2="60.5"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#173A6D" />
                <stop offset="1" stop-color="#2D70D3" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_520_4937"
                x1="70.5"
                y1="3"
                x2="90.5"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#173A6D" />
                <stop offset="1" stop-color="#2D70D3" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-[#000] font-montserrat text-[16px] font-normal leading-[19.264px]">
            La quête du dépassement est au cœur de l'état d'esprit de Datamed
            DATAMED CARE.
          </p>
        </div>
        <div className="w-[360px] h-[294px] flex-shrink-0 p-4 space-y-6 rounded-[10px] bg-[#FFFfFf] shadow-[0px_403px_113px_0px_rgba(23,58,109,0),0px_258px_103px_0px_rgba(23,58,109,0.01),0px_145px_87px_0px_rgba(23,58,109,0.05),0px_64px_64px_0px_rgba(23,58,109,0.09),0px_16px_35px_0px_rgba(23,58,109,0.1)]">
          <div className="flex w-[80px] h-[80px] p-[15px] justify-center items-center flex-shrink-0 rounded-[10px] bg-[#F6F6F6]">
            <img src={assets.hrperson} alt="" />
          </div>
          <p className="text-[#0E1F51] font-montserrat text-[20px] font-extrabold leading-[26px]">
            Excellence
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="91"
            height="6"
            viewBox="0 0 91 6"
            fill="none"
          >
            <rect
              x="0.5"
              width="60"
              height="6"
              rx="3"
              fill="url(#paint0_linear_520_4937)"
            />
            <rect
              x="70.5"
              width="20"
              height="6"
              rx="3"
              fill="url(#paint1_linear_520_4937)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_520_4937"
                x1="0.5"
                y1="3"
                x2="60.5"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#173A6D" />
                <stop offset="1" stop-color="#2D70D3" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_520_4937"
                x1="70.5"
                y1="3"
                x2="90.5"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#173A6D" />
                <stop offset="1" stop-color="#2D70D3" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-[#000] font-montserrat text-[16px] font-normal leading-[19.264px]">
            Equilibre et performance pour permettre à nos consultants de
            s'épanouir.
          </p>
        </div>
        <div className="w-[360px] h-[294px] flex-shrink-0 p-4 space-y-6 rounded-[10px] bg-[#FFFfFf] shadow-[0px_403px_113px_0px_rgba(23,58,109,0),0px_258px_103px_0px_rgba(23,58,109,0.01),0px_145px_87px_0px_rgba(23,58,109,0.05),0px_64px_64px_0px_rgba(23,58,109,0.09),0px_16px_35px_0px_rgba(23,58,109,0.1)]">
          <div className="flex w-[80px] h-[80px] p-[15px] justify-center items-center flex-shrink-0 rounded-[10px] bg-[#F6F6F6]">
            <img src={assets.amelioration} alt="" />
          </div>
          <p className="text-[#0E1F51] font-montserrat text-[20px] font-extrabold leading-[26px]">
            Amélioration continue
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="91"
            height="6"
            viewBox="0 0 91 6"
            fill="none"
          >
            <rect
              x="0.5"
              width="60"
              height="6"
              rx="3"
              fill="url(#paint0_linear_520_4937)"
            />
            <rect
              x="70.5"
              width="20"
              height="6"
              rx="3"
              fill="url(#paint1_linear_520_4937)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_520_4937"
                x1="0.5"
                y1="3"
                x2="60.5"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#173A6D" />
                <stop offset="1" stop-color="#2D70D3" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_520_4937"
                x1="70.5"
                y1="3"
                x2="90.5"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#173A6D" />
                <stop offset="1" stop-color="#2D70D3" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-[#000] font-montserrat text-[16px] font-normal leading-[19.264px]">
            Notre progression est pilotée par l'amélioration continue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
