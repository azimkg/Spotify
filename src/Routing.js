import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Routing = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default Routing;
