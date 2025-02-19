import React from "react";
import { values } from "../../../assets/assets";

const Values = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-[120px] mt-[90px] space-y-5">
      <h1 className="text-center font-montserrat text-[24px] sm:text-[32px] md:text-[40px] font-semibold leading-[120.402%] uppercase bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
        Nos valeurs
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="h-auto sm:h-[409px] w-full sm:w-1/3 flex flex-col justify-end">
          <div className="h-auto sm:h-[317px] p-4 space-y-5 items-center flex flex-col justify-center bg-white rounded-[15px] shadow-[0px_403px_113px_rgba(23,58,109,0),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)] text-white">
            <img src={values.valeur1} alt="" className="w-[]" />
            <p className="text-black text-center font-montserrat text-[14px] sm:text-[16px] font-medium leading-[120.402%] uppercase">
            Management
            </p>
            <p className="text-black text-center font-montserrat text-[14px] sm:text-[16px] font-normal leading-[120.402%]">
              La quête du dépassement est au cœur de l'état d'esprit de Datamed
              Consulting.
            </p>
          </div>
        </div>
        <div className="h-auto sm:h-[409px] w-full sm:w-1/3">
          <div className="h-auto sm:h-[317px] p-4 space-y-5 items-center flex flex-col justify-center bg-white rounded-[15px] shadow-[0px_403px_113px_rgba(23,58,109,0),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)] text-white">
            <img src={values.valeur2} alt="" className="" />
            <p className="text-black text-center font-montserrat text-[14px] sm:text-[16px] font-medium leading-[120.402%] uppercase">
            Efficacité
            </p>
            <p className="text-black text-center font-montserrat text-[14px] sm:text-[16px] font-normal leading-[120.402%]">
              L'innovation est au cœur de notre stratégie pour anticiper les
              besoins futurs.
            </p>
          </div>
        </div>
        <div className="h-auto sm:h-[409px] w-full sm:w-1/3 flex flex-col justify-end">
          <div className="h-auto sm:h-[317px] p-4 space-y-5 items-center flex flex-col justify-center bg-white rounded-[15px] shadow-[0px_403px_113px_rgba(23,58,109,0),0px_258px_103px_rgba(23,58,109,0.01),0px_145px_87px_rgba(23,58,109,0.05),0px_64px_64px_rgba(23,58,109,0.09),0px_16px_35px_rgba(23,58,109,0.10)] text-white">
            <img src={values.valeur3} alt="" className="" />
            <p className="text-black text-center font-montserrat text-[14px] sm:text-[16px] font-medium leading-[120.402%] uppercase">
            Dynamisme
            </p>
            <p className="text-black text-center font-montserrat text-[14px] sm:text-[16px] font-normal leading-[120.402%]">
              Nous visons l'excellence dans tous nos projets et services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
