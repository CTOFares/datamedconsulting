import React, { useState, useEffect } from "react";

const ConsultantSection = () => {
  const [count, setCount] = useState(0);
  const targetCount = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= targetCount) {
          clearInterval(interval); // Stop the interval when we reach the target
          return targetCount;
        }
        return prevCount + 1; // Increment by 100 for smoother transition
      });
    }, 100); // Update every 50ms

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="mb-9  mt-[90px] sm:flex gap-4  rounded p-9">
      <div className=" sm:w-1/2 mb-8 space-y-4">
        <p className=" text-[20px] sm:text-[40px] text-[#060606] font-montserrat font-semibold leading-[48.161px]">
          Vous êtes un <br />
          <span className="text-transparent bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text font-montserrat text-[40px] sm:text-[50px] font-semibold leading-[60.201px]">
            Consultant
          </span>
        </p>
        <p className=" ">
          Rejoignez CVTECH dès aujourd’hui ! Nous mettons en relation les
          meilleurs talents avec les clients idéaux, en trouvant l’opportunité
          parfaite pour vos compétences. Ne laissez plus passer les bonnes
          occasions !
        </p>
        <div className="hidden md:block">
          <button className="flex w-[189px]  text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" mb-8 sm:mb-0  sm:w-1/2  items-center flex justify-center">
        <div className="text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#1DB9E6] to-[#106780] font-montserrat text-[90px] font-semibold leading-[108.362px]">
            {count}
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#1DB9E6] to-[#106780] font-montserrat text-[30px] font-semibold leading-[36.121px]">
            Plus que
          </p>
        </div>
      </div>
      <div className="sm:hidden items-center justify-center flex">
        <button className="flex w-[189px] sm:hidden text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
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

export default ConsultantSection;
