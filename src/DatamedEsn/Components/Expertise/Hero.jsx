import React, { memo } from "react";
import { assets } from "../../../assets/assets";

const Hero = () => {
  return (
    <div className="mt-6 mb-6 relative">
      <img
        src={assets.hero2}
        className="rounded-[15px] h-[474px] w-full object-cover"
        alt="hero2"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 flex w-[64px] h-[68px] flex-col justify-center items-center flex-shrink-0 rounded-full bg-[#06B4E1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3L12.75 19.1893L18.9697 12.9697C19.2626 12.6768 19.7374 12.6768 20.0303 12.9697C20.3232 13.2626 20.3232 13.7374 20.0303 14.0303L12.5303 21.5303C12.2374 21.8232 11.7626 21.8232 11.4697 21.5303L3.96967 14.0303C3.67678 13.7374 3.67678 13.2626 3.96967 12.9697C4.26256 12.6768 4.73744 12.6768 5.03033 12.9697L11.25 19.1893L11.25 3C11.25 2.58579 11.5858 2.25 12 2.25Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="bg-white absolute top-0 left-1/2 transform text-center justify-center -translate-x-1/2 w-[750px] h-[155px] rounded-bl-[35px] rounded-br-[35px]">
        <p className="font-montserrat text-[80px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#16386C] to-[#2B6DD2] bg-clip-text text-transparent">
          EXPERTISE
        </p>
      </div>
    </div>
  );
};

export default memo(Hero);
