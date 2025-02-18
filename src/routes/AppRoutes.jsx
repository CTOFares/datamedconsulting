import React from "react";
import DatamedGroup from "../DatamedGroup/DatamedGroup";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DatamedGroup />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

// <div className="w-full min-h-screen flex flex-col px-4 sm:px-20">
// {/* <ScrollToTop /> */}
// </div>
