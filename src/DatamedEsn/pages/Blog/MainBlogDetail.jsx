import React from "react";

const MainBlogDetail = ({ id, date, title, image, paragraphe }) => {
  return (
    <>
      <div className="space-y-5">
        <div className="justify-between flex">
          <p className="text-black font-montserrat uppercase text-base font-normal leading-[120.402%]">
            Article: #{id}
          </p>
          <p className="text-black font-montserrat uppercase text-base font-normal leading-[120.402%]">
            Date: {date}
          </p>
        </div>
        <h1 class="text-4xl font-semibold uppercase leading-[48.161px] bg-gradient-to-r from-[#16386C] to-[#2B6DD2] bg-clip-text text-transparent">
          {title}
        </h1>
        <img src={image} className="rounded" alt="" />
        <p class="text-black font-montserrat text-base whitespace-pre-wrap font-normal leading-[19.264px]">
          {paragraphe}
        </p>
      </div>
    </>
  );
};

export default MainBlogDetail;
