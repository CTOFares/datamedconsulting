import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div>
      <div className="sm:flex mt-[90px] p-4 mb-6 gap-6 items-center">
        <div className="w-1/3  ">
          <p className="text-black font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase">
            Ce que nos
            <p className="bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent font-montserrat text-[40px] font-semibold leading-[120.402%] uppercase">
              clients
            </p>
            disent de nous
          </p>
        </div>
        <p className="text-black font-montserrat text-[16px] font-normal leading-[120.402%]">
          Découvrez comment nos freelances ont aidé des entreprises comme la
          vôtre à réussir leurs projets.
        </p>
      </div>
      <div className="mx-[120px] justify-between flex gap-4 ">
        <Testimonial
          quote="Trouvé en 24 heures"
          paragraphe="Trouver un freelance n’a jamais été aussi simple. Grâce à DATAMED
        Consulting, nous avons pu trouver un expert en moins de 24 heures SAP
        qui a su dépasser nos attentes."
          Name="Fares SAFER"
          Position=" CTO DATEMED"
        />
        <Testimonial
          quote="Trouvé en 24 heures"
          paragraphe="Trouver un freelance n’a jamais été aussi simple. Grâce à DATAMED
        Consulting, nous avons pu trouver un expert en moins de 24 heures SAP
        qui a su dépasser nos attentes."
          Name="Fares SAFER"
          Position=" CTO DATEMED"
        />
        <Testimonial
          quote="Trouvé en 24 heures"
          paragraphe="Trouver un freelance n’a jamais été aussi simple. Grâce à DATAMED
        Consulting, nous avons pu trouver un expert en moins de 24 heures SAP
        qui a su dépasser nos attentes."
          Name="Fares SAFER"
          Position=" CTO DATEMED"
        />
      </div>
    </div>
  );
};

export default Testimonials;
