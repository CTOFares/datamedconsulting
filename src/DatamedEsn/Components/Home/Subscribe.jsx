import React from "react";

const Subscribe = () => {
  return (
    <div className="p-8 sm:p-10 mb-11 space-y-4 text-center justify-center items-center rounded-[15px] mx-11 bg-white shadow-lg">
      <div className="space-y-4">
        <p className="font-montserrat text-[24px] sm:text-[40px] font-semibold leading-[48.161px] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          Abonnez-vous à notre <br /> actualité
        </p>
        <p className="text-sm sm:text-base">
          Soyez les premiers à découvrir nos dernières actualités, annonces et
          nouveautés. <br />
          Abonnez-vous à notre newsletter et suivez-nous sur nos réseaux sociaux
          pour ne rien manquer !
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 justify-center gap-4">
        <input
          className="flex w-full sm:w-[400px] md:w-[500px] lg:w-[641px] p-4 rounded-[14px] border border-[#000] bg-white"
          placeholder="faressafer@consultingdatamed.com"
        />
        <button className="flex w-full sm:w-auto text-white p-4 justify-center items-center gap-2 rounded-[14px] bg-[#173A6D]">
          Abonner
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
  );
};

export default Subscribe;
