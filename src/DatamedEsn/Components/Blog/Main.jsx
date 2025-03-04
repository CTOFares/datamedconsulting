import React from "react";
import { useNavigate } from "react-router-dom";
import Element from "./Element";
import { blogs } from "../../../assets/assets";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="my-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  px-4 sm:px-20">
      {blogs.map((blog) => (
        <div
          key={blog.id}
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
  );
};

export default Main;
