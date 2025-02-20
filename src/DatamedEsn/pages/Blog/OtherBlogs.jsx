import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { blogs } from "../../../assets/assets";
import Element from "../../Components/Blog/Element";

const OtherBlogs = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div className="my-11">
      <div className="flex items-center   justify-between  ">
        <h1 className="text-start font-montserrat    text-[24px] sm:text-[40px] font-semibold leading-[120.402%] bg-gradient-to-r from-[#173A6D] to-[#2D70D3] bg-clip-text text-transparent">
          Posts Récents
        </h1>
        <NavLink to="/Actualités" className="flex justify-center gap-4">
          <p className="text-black font-lato  text-[16px] font-normal leading-[120.402%]">
            Voir Plus
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.83331 14.1666L14.1666 5.83325M14.1666 5.83325H5.83331M14.1666 5.83325V14.1666"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {blogs
          .filter((blog) => blog.id !== id)
          .map((blog) => (
            <div
              key={blog.id}e
              onClick={() => navigate(`/esn/Actualités/${blog.id}`)}
              className="cursor-pointer"
            >
              <Element
                image={blog.img}
                date={blog.date}
                title={blog.title}
                paragraphe={blog.paragraphe}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
