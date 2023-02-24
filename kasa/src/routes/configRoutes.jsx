import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";

const configRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default configRoutes;
