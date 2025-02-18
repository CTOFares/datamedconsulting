import React from "react";

const ButtonBlue = ({ text }) => {
  return (
    <button className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
      { text }
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
  );
};

export default ButtonBlue;
