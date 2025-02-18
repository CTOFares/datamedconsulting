import React from "react";

const Element = ({ date, title, paragraphe, image }) => {
  return (
    <div className="my-11 space-y-3">
      <img src={image} className="rounded-lg" alt="" />
      <p className="text-[#807B7B] font-montserrat text-[16px] not-italic font-medium leading-[120.402%]">
        {date}
      </p>
      <h1 className="text-black font-montserrat text-[25px] not-italic font-medium leading-[120.402%]">
        {title}
      </h1>
      <p className="text-black font-montserrat text-[16px] not-italic font-normal leading-[120.402%]">
        {paragraphe}
      </p>
    </div>
  );
};

export default Element;
