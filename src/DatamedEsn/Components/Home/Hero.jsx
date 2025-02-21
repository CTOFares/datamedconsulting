import React from "react";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/esn/Contact");
  };

  return (
    <div className="mb-9 relative gap-4 flex sm:min-h-screen w-full">
      <div
        className="hidden lg:flex w-1/3 bg-black rounded-[15px] bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.hero1})` }}
      ></div>
      <div className="hidden lg:flex w-2/3 flex-col sm:gap-y-4">
        <div className="relative h-1/2 flex">
          <div className="absolute sm:block top-[20px] left-[-250px] flex flex-col items-center justify-start">
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
            <div className="w-[534px] rounded-[20px] pl-10 bg-white sm:h-[105px]">
              <h1 className="text-black flex gap-5 font-montserrat text-[80px] font-semibold leading-[96.322px] uppercase">
                Votre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#173A6D] to-[#2D70D3] font-montserrat text-[80px] font-semibold leading-[96.322px] uppercase">
                  AVENIR
                </span>
              </h1>
            </div>
            <div className="w-[534px] rounded ml-40 h-[84px]">
              <div className="ml-[12px] bg-white h-[113px] rounded-tl-[0px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] p-9">
                <button
                  onClick={handleClick}
                  className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]"
                >
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
          <div className="w-[173px] absolute   sm:h-[350px] right-0 rounded-[92px] bg-white shadow-[219px_0px_61px_0px_rgba(42,106,199,0),140px_0px_56px_0px_rgba(42,106,199,0.01),79px_0px_47px_0px_rgba(42,106,199,0.05),35px_0px_35px_0px_rgba(42,106,199,0.09),9px_0px_19px_0px_rgba(42,106,199,0.10)] flex flex-col justify-between items-center">
            <div className="items-center mt-6   text-center">
              <p className="bg-gradient-to-b from-[#1DB9E6] to-[#106780] bg-clip-text text-transparent font-montserrat text-[45px] font-semibold leading-[120.402%]">
                50+
              </p>
              <p className="text-[#2C2C2C] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
                Clients
              </p>
            </div>
            <div className="items-center   text-center">
              <p className="bg-gradient-to-b from-[#1DB9E6] to-[#106780] bg-clip-text text-transparent font-montserrat text-[45px] font-semibold leading-[120.402%]">
                200k
              </p>
              <p className="text-[#2C2C2C] text-center font-montserrat text-[16px] font-normal leading-[120.402%]">
                Consultant
              </p>
            </div>
            <div className="items-center mb-6   text-center">
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
      <div className="justify-center items-center lg:hidden mt-6 mb-6 relative">
        <div className="pt-10 flex items-center justify-center">
          <h1 className="mx-auto text-center max-w-4xl font-display text-5xl font-semibold tracking-tight text-[#000000] sm:text-7xl">
            Dirigez Votre
            <span className="relative whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="font-montserrat text-[60px] sm:text-[150px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
                Avenir
              </span>
            </span>
          </h1>
        </div>
        <p className="text-black text-center flex justify-center items-center py-10 font-montserrat text-[16px] font-normal leading-[120.402%]">
          DATAMED Consulting permet d'anticiper les futures technologies et
          d'appréhender les grands changements en matière de digital et
          d'innovation. Nous vous accompagnons également sur tous vos projets
          d'infrastructure et de management de projet.
        </p>
        <div className="justify-center items-center flex">
          <button
            onClick={handleClick}
            className="flex w-auto text-white p-[13px_19px] gap-[10px] rounded-[14px] bg-[#173A6D]"
          >
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
  );
};

export default Hero;
