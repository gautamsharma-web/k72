import React, { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Agence from "./pages/agence";
import Navbar from "./components/Navigation/Navbar.jsx";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import Projects from "./pages/projects";
const App = () => {
  return (
    <div>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>{" "}
    </div>
  );
};

export default App;
