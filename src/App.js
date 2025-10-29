import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import NavbarHeader from "./components/NavbarHeader";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, disable: 'mobile' });
  }, []);

  return (
    <Router>
      <NavbarHeader />
      <Routes>
        <Route path="/portfolio-website" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
