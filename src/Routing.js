import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllMusicPage from "./components/pages/AllMusicPage";
import Homepage from "./components/pages/HomePage";
import Sidebar from "./components/Sidebar";

const Routing = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <BrowserRouter>
      <Sidebar isVisible={isVisible} setIsVisible={setIsVisible} />
      <Navbar setIsVisible={setIsVisible} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/musics" element={<AllMusicPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
