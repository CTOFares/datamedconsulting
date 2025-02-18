import React from "react";

const Contact = () => {
  return (
    <div className="mt-20 ">
      <div className="w-full space-y-4 flex flex-col items-center justify-center mb-4   text-center">
        <p className="text-[40px] font-poppins font-semibold uppercase leading-[120.402%] text-center text-black">
          À la recherche d'un nouveau <br />
          <p className="text-[40px] font-poppins font-semibold uppercase leading-[120.402%] text-center bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
            challenge?
          </p>
        </p>

        <p className="text-[20px] sm:w-1/2 font-montserrat font-normal leading-[120.402%] text-center text-black">
          DATAMED Consulting est un cabinet de conseil en IT, amateur d’une
          culture « Geek » et d’une amélioration constante. Nous anticipons les
          futures technologies et surfons sur les grands changements en matière
          de digital, de sécurité et d’innovation.
        </p>
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

export default Contact;
