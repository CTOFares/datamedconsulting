import React from "react";
import Element from "../Career/Element";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-9 mb-9 space-y-20 px-4 sm:px-20">
      <p className="text-black sm:w-1/2   text-center font-montserrat text-[16px] sm:text-[20px] font-normal leading-[120.402%]">
        Your Text Here DATAMED Consulting permet d'anticiper les futures
        technologies et d'appréhender les grands changements en matière de
        digital et d'innovation. Nous vous accompagnons également sur tous vos
        projets d'infrastructure et de management de projet.
      </p>
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

export default Main;
