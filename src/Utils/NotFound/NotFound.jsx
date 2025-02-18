import React from "react";
import { assets } from "../../assets/assets";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img
        src={assets.notfound}
        alt="Not Found"
        className="max-w-full max-h-full"
      />
    </div>
  );
};

export default NotFound;
