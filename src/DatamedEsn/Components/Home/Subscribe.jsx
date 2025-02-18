import React from "react";

const Subscribe = () => {
  return (
    <div className="p-16 space-y-4 text-center justify-center items-center² rounded-[15px] bg-white shadow-[0px_403px_113px_0px_rgba(23,_58,_109,_0),_0px_258px_103px_0px_rgba(23,_58,_109,_0.01),_0px_145px_87px_0px_rgba(23,_58,_109,_0.05),_0px_64px_64px_0px_rgba(23,_58,_109,_0.09),_0px_16px_35px_0px_rgba(23,_58,_109,_0.1)]">
      <div className="space-y-4">
        <p className="  font-montserrat text-[40px] font-semibold leading-[48.161px] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          Abonnez-vous à notre <br /> actualité
        </p>
        <p className=" ">
          Soyez les premiers à découvrir nos dernières actualités, annonces et
          nouveautés. <br />
          Abonnez-vous à notre newsletter et suivez-nous sur nos réseaux sociaux
          pour ne rien manquer !
        </p>
      </div>
      <div className="sm:flex items-center space-y-6 sm:space-y-0 justify-center gap-4">
        <input
          className="flex w-full  sm:w-[641px] p-[18px_30px] items-start gap-2 rounded-[14px] border-[1px] border-[#000] bg-white"
          placeholder="faressafer@consultingdatamed.com"
        />
        <div className="flex items-center justify-center">

          <button className="flex sm:w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

{
  /* <div className="items-center w-[845px]  text-center justify-center">


</div>
 */
}
