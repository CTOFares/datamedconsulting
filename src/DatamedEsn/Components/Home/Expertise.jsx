import React from "react";
import Element from "./Element";

const Expertise = () => {
  return (
    <div className="  sm:pt-[50px]  sm:px-10">
      <div className="p-3 space-y-4 sm:p-4 mb-6 items-center justify-center text-center sm:gap-6">
        <h1 className="text-center font-montserrat text-[40px] font-semibold leading-[48.161px] bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          EXPERTISE
        </h1>
        <p className=" text-black font-montserrat text-base font-normal leading-[19.264px]">
          DATAMED Consulting permet d'anticiper les futures technologies et
          d'appréhender <br />
          les grands changements en matière de digital et d'innovation. <br />
          Nous vous accompagnons également sur tous vos projets d'infrastructure
          et de management de projet.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4 grid-cols-1 grid-rows-4">
        <Element
          Title="DATA"
          Paragraphe="Nous accompagnons nos clients la dans Data architecture, la data engineering, la data science et algorithmie et la visualisation de données."
        />
        <Element
          Title="Management de projet"
          Paragraphe="Avec notre offre Conseil et Management de projet SI, Nous
            accompagnons les entreprises dans leurs projets de transformation."
        />
        <Element
          Title="Digital"
          Paragraphe="Nous vous accompagnons dans votre transformation digitale depuis le recueil du besoin, jusqu'à la recette utilisateur via les phases d'architecture, conception, développement, intégration et testing."
        />
        <Element
          Title="Infrastructures IT"
          Paragraphe="Nous intervenons depuis les phases d'architecture et de transformation de vos infrastructures IT (build) jusqu'au maintien en conditions opérationnelles (MCO) de vos applications. "
        />
      </div>
    </div>
  );
};

export default Expertise;
