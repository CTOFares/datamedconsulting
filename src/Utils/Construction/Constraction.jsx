import React from "react";
import { assets } from "../../assets/assets";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Constraction = () => {
  return (
    <div className="w-full sm:h-screen items-center justify-center">
      <p className="text-center mt-9  text-2xl sm:text-4xl  bg-clip-text font-montserrat text-[20px] sm:text-[40px] text-[#000000] font-semibold">
        Envoyez-nous un e-mail à :<br />
        <span className="text-transparent bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text font-montserrat text-[20px] sm:text-[50px] font-semibold ">
          contact@consultingdatamed.com
        </span>
      </p>
      <div className="w-full h-[600px]">
        <DotLottieReact
          src="https://lottie.host/cd7257af-a195-42c2-9975-012fbc12a318/hxcc5TRnbk.lottie"
          loop
          autoplay
        />
      </div>

      {/* <video
        src={assets.constraction}
        autoPlay
        loop
        muted
        className="w-[1440px] max-h-full"
      /> */}
    </div>
  );
};

export default Constraction;
