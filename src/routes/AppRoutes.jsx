import React from "react";
import DatamedGroup from "../DatamedGroup/DatamedGroup";
import { Route, Routes } from "react-router-dom";
import Home from "../DatamedEsn/pages/Home/Home";
import Career from "../DatamedEsn/pages/Career/Career";
import CareerDetail from "../DatamedEsn/pages/Career/CareerDetails";
import Blog from "../DatamedEsn/pages/Blog/Blog";
import BlogDetail from "../DatamedEsn/pages/Blog/BlogDetail";
import Expertise from "../DatamedEsn/pages/Expertise/Expertise";
import Contact from "../DatamedEsn/pages/Contact/Contact";
import Policy from "../Utils/Policy/Policy";
import Mention from "../Utils/Policy/Mention";
import Cookies from "../Utils/Policy/Cookies";
import NotFound from "../Utils/NotFound/NotFound";
import ScrollToTop from "../Utils/ScrollToTop";

NotFound;

const AppRoutes = () => {
  return (
    <>
      <div>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<DatamedGroup />} />
          <Route path="/esn/Accueil" element={<Home />} />
          <Route path="/esn/carriere" element={<Career />} />
          <Route path="/esn/carriere/:id" element={<CareerDetail />} />
          <Route path="/esn/Actualités" element={<Blog />} />
          <Route path="/esn/Actualités/:id" element={<BlogDetail />} />
          <Route path="/esn/Expertise" element={<Expertise />} />
          <Route path="/esn/Contact" element={<Contact />} />
          <Route path="/politiquedeconfidentialite" element={<Policy />} />
          <Route path="/Mentionslegales" element={<Mention />} />
          <Route path="/politiquedecookies" element={<Cookies />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
