import React from "react";

const MainContact = () => {
  return (
    <div className="sm:flex justify-end   mt-9 gap-4">
      <div className="sm:w-1/2  ">
        <h1
          className="text-[30px]  sm:text-[40px] font-montserrat font-semibold mb-4 uppercase leading-[120.402%] bg-gradient-to-r from-[#16386C] to-[#2B6DD2] bg-clip-text text-transparent"
          href="#"
        >
          CONTACTER-Nous
        </h1>
        <a
          className="text-[16px] font-montserrat font-normal leading-[120.402%] text-black"
          href="#"
        >
          Vous souhaitez échanger ? Nous rencontrer ? C'est ici !
        </a>
      </div>
      <div className="sm:w-1/2    space-y-4 ">
        <form action="" className="space-y-4">
          <div className="space-y-4">
            <label htmlFor="Prenom">Prénom*</label>
            <input
              className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px]  rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Fares"
              alt="Prenom"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="Nom">Nom*</label>
            <input
              className="flex w-full  sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px]  rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Safer"
              alt="Nom"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="Téléphone">Téléphone*</label>
            <input
              className="flex w-full  sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px]  rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="+33 25 556  8855"
              alt="Téléphone"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="Object">Object*</label>
            <input
              className="flex w-full sm:w-[641px] p-[18px_30px] items-start gap-2 h-[45px]  rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Need to Find a Consultant"
              alt="Object"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="Message">Message*</label>
            <textarea
              className="flex w-full  sm:w-[641px] p-[18px_30px]  items-start gap-2   rounded-[14px] border-[1px] border-[#000] bg-white"
              placeholder="Need to Find a Consultant"
              rows={10}
              alt="Message"
            />
          </div>
          <div class="flex gap-3  mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              className="text-[16px] font-montserrat font-normal leading-[28px] text-black"
            >
              J’accepte les termes et conditions.Voir les Conditions
              d’utilisation
            </label>
          </div>
          <button className="flex w-[189px] text-white p-[13px_19px] justify-center items-center gap-[10px] rounded-[14px] bg-[#173A6D]">
            Envoyer
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
        </form>
      </div>
    </div>
  );
};

export default MainContact;
