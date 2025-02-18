import React from "react";
import DatamedGroup from "../DatamedGroup/DatamedGroup";
import { Route, Routes } from "react-router-dom";
import Home from "../DatamedEsn/pages/Home/Home";
import Career from "../DatamedEsn/pages/Career/Career";
import OtherCareers from "../DatamedEsn/pages/Career/OtherCareers";
import Blog from "../DatamedEsn/pages/Blog/Blog";
import BlogDetail from "../DatamedEsn/pages/Blog/BlogDetail";
import Expertise from "../DatamedEsn/pages/Expertise/Expertise";
import Contact from "../DatamedEsn/pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DatamedGroup />} />
        <Route path="/esn/Accueil" element={<Home />} />
        <Route path="/esn/carriere" element={<Career />} />
        <Route path="/esn/carriere/:id" element={<OtherCareers />} />
        <Route path="/esn/Actualités" element={<Blog />}/>
        <Route path="/esn/Actualités/:id" element={<BlogDetail />}/>
        <Route path="/esn/Expertise" element={<Expertise />}/>
        <Route path="/esn/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
