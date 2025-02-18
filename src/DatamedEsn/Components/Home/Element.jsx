import React from "react";
import { Link } from "react-router-dom";

const Element = ({ Title, Paragraphe }) => {
  return (
    <div className="flex gap-4 h-[182px] group rounded-[15px] hover:bg-[linear-gradient(116deg,_#205198_61.41%,_#0B1B32_98.56%)] transition-all">
      <div className="rounded-[35px] bg-[#205198] hover:bg-[linear-gradient(116deg,_#205198_61.41%,_#0B1B32_98.56%)] w-[15px]"></div>
      <div className="p-4 flex flex-col justify-between text-[#141414] hover:text-white">
        <p className="font-montserrat text-[20px] sm:text-[30px] font-semibold leading-[36.121px]">
          {Title}
        </p>
        <p className="font-montserrat text-[16px] font-normal leading-[19.264px]">
          {Paragraphe}
        </p>
        <Link to="/contact" className="flex gap-4 items-center text-start">
          <div className="text-[#14B8E4] font-lato text-[16px] font-normal leading-[19.264px]">
            Contactez-nous
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M6.33337 14.1666L14.6667 5.83325M14.6667 5.83325H6.33337M14.6667 5.83325V14.1666"
              stroke="#14B8E4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Element;
