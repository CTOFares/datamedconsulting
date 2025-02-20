import React, { useState, useEffect } from "react";

const ConsultantSection = () => {
  const [count, setCount] = useState(0);
  const targetCount = 40000;

  useEffect(() => {
    let start = null;
    const duration = 34000; // Duration of the animation in ms

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newCount = Math.min(
        Math.floor((progress / duration) * targetCount),
        targetCount
      );
      setCount(newCount);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <div className="mb-9 mt-[90px] sm:flex gap-4 rounded p-4">
      <div className="sm:w-1/2 mb-8 space-y-4">
        <div className="sm:w-1/3">
          <p className="text-black font-montserrat  text-2xl sm:text-4xl font-semibold leading-[100.402%] uppercase">
            Vous êtes un{" "}
            <p className=" sm:text-start font-montserrat   font-semibold leading-[48.161px] bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              Consultant
            </p>
          </p>
        </div>
        <p>
          Rejoignez CVTECH dès aujourd’hui ! Nous mettons en relation les
          meilleurs talents avec les clients idéaux, en trouvant l’opportunité
          parfaite pour vos compétences. Ne laissez plus passer les bonnes
          occasions !
        </p>
        <div className="hidden md:block">
          <button className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
            Deposer
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
      <div className="mb-8 sm:mb-0 sm:w-1/2 flex justify-center items-center">
        <div className="text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#1DB9E6] to-[#106780] font-montserrat text-[90px] font-semibold leading-[108.362px]">
            {count}
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#1DB9E6] to-[#106780] font-montserrat text-[30px] font-semibold leading-[36.121px]">
            Plus que
          </p>
        </div>
      </div>
      <div className="sm:hidden flex justify-center items-center">
        <button className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
          Deposer
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

export default ConsultantSection;
