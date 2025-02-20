import React from "react";
import { assets } from "../../assets/assets";

const Test1 = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-montserrat text-gray-900 sm:text-5xl">
                DATAMED RESARCH
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Avec DATAMED Consulting, nous accompagnons les entreprises dans
                leur transition digitale et leurs projets de transformation
                technologique. De la gestion de projets IT à l’optimisation des
                infrastructures, en passant par l’analyse et la valorisation des
                données, nos experts apportent des solutions sur mesure pour
                maximiser la performance et l’innovation.
              </p>
              <button className="flex mt-10 w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
                Voir Plus
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
          <img
            src={assets.esncover}
            alt="Product screenshot"
            className="w-[48rem] h-[600px] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="600"
          />
        </div>
      </div>
    </div>
  );
};

export default Test1;
