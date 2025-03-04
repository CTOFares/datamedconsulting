import React from "react";
import Testimonial from "./Testimonial";

const testimonialsData = [
  {
    quote: "Une expérience fluide et rapide",
    paragraphe:
      "Grâce à DATAMED Consulting, nous avons trouvé un consultant SAP en moins de 24 heures. Le service est professionnel et efficace, je recommande vivement !",
    Name: "Sophie Martin",
    Position: "Directrice IT chez TechSolutions",
  },
  {
    quote: "Des experts qualifiés",
    paragraphe:
      "Nous avions besoin d’un freelance spécialisé en cybersécurité. En quelques heures, DATAMED Consulting nous a mis en relation avec un expert compétent qui a sécurisé notre infrastructure.",
    Name: "Mohamed Ben Ali",
    Position: "Responsable Sécurité chez SecureTech",
  },
  {
    quote: "Un recrutement sans stress",
    paragraphe:
      "Nous avons gagné un temps précieux en passant par DATAMED Consulting. Trouver un freelance adapté à nos besoins n’a jamais été aussi simple et rapide.",
    Name: "Laura Dupont",
    Position: "CEO chez DigitalWave",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="sm:flex mt-[90px] space-y-6 p-4 mb-6 gap-6 items-center sm:px-11">
        <div className="sm:w-1/3">
          <p className="text-black font-montserrat  text-2xl sm:text-4xl font-semibold leading-[100.402%] uppercase">
            Ce que nos <span></span>
            <span className=" sm:text-start font-montserrat   font-semibold leading-[48.161px] bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
              CLIENT
            </span>
          </p>
          <p className="text-black font-montserrat  text-2xl sm:text-4xl font-semibold leading-[100.402%] uppercase">
            disent de nous
          </p>
        </div>
        <p className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
          Découvrez comment nos freelances ont aidé des entreprises comme la
          vôtre à réussir leurs projets.
        </p>
      </div>
      <div className="sm:mx-[120px] justify-between grid grid-cols-1 space-y-6 sm:space-y-0 sm:grid-cols-3 gap-4">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.quote}
            paragraphe={testimonial.paragraphe}
            Name={testimonial.Name}
            Position={testimonial.Position}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
