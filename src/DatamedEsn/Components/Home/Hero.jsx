import React from "react";
import { assets } from "../../../assets/assets";

const Hero = () => {
  return (
    <div className="mb-9 relative gap-4 flex min-h-screen w-full">
      <div
        className="w-1/3 bg-black rounded-[15px] bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.hero1})` }}
      ></div>
      <div className="w-2/3 flex flex-col gap-y-4">
        <div className="relative h-1/2 flex">
          <div className="absolute top-[40px] left-[-250px] flex flex-col items-center justify-start">
            <div className="w-[534px] rounded h-[113px]">
              <div className="ml-[35px] flex gap-4 justify-center items-center bg-white rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[0px] pl-10 h-[113px]">
                <h1 className="text-black font-montserrat text-[80px] font-semibold leading-[96.322px] uppercase">
                  Dirigez
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="106"
                  height="69"
                  viewBox="0 0 106 69"
                  fill="none"
                >
                  <path
                    d="M4 65L35.0701 30.5124C39.863 25.1923 48.2977 25.4904 52.7031 31.1356V31.1356C56.8184 36.4092 64.5462 37.0781 69.5065 32.5901L80.1613 22.9498L100 5M100 5H80.6452M100 5L95.1613 32.113"
                    stroke="black"
                    strokeWidth="10"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[534px] rounded-[20px] pl-10 bg-white h-[105px]">
              <h1 className="text-black flex gap-5 font-montserrat text-[80px] font-semibold leading-[96.322px] uppercase">
                Votre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#173A6D] to-[#2D70D3] font-montserrat text-[80px] font-semibold leading-[96.322px] uppercase">
                  AVENIR
                </span>
              </h1>
            </div>
            <div className="w-[534px] rounded ml-40 h-[84px]">
              <div className="ml-[12px] bg-white h-[113px] rounded-tl-[0px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] p-9">
                <button className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
                  Contacter Nous
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
                </button>
              </div>
            </div>
          </div>
          <div className="w-[173px] absolute h-[366px] right-0 rounded-[92px] bg-white shadow-[219px_0px_61px_0px_rgba(42,106,199,0),140px_0px_56px_0px_rgba(42,106,199,0.01),79px_0px_47px_0px_rgba(42,106,199,0.05),35px_0px_35px_0px_rgba(42,106,199,0.09),9px_0px_19px_0px_rgba(42,106,199,0.10)] flex flex-col justify-between items-center">
            <div className="items-center mt-6 text-center">
              <p className="bg-gradient-to-b from-[#1DB9E6] to-[#106780] bg-clip-text text-transparent font-montserrat text-[45px] font-semibold leading-[120.402%]">
                50+
              </p>
              <p className="text-[#2C2C2C] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
                Clients
              </p>
            </div>
            <div className="items-center text-center">
              <p className="bg-gradient-to-b from-[#1DB9E6] to-[#106780] bg-clip-text text-transparent font-montserrat text-[45px] font-semibold leading-[120.402%]">
                200+
              </p>
              <p className="text-[#2C2C2C] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
                Consultant
              </p>
            </div>
            <div className="items-center mb-6 text-center">
              <p className="bg-gradient-to-b from-[#1DB9E6] to-[#106780] bg-clip-text text-transparent font-montserrat text-[45px] font-semibold leading-[120.402%]">
                4
              </p>
              <p className="text-[#2C2C2C] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
                Expertise
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-1/2 bg-black rounded-[15px] bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.hero2})` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;