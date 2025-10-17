import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

import NavbarHeader from "./components/NavbarHeader";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

// Scroll to hash on page load
function ScrollToHash() {
  const location = useLocation();

useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scroller.scrollTo(id, {
        duration: 600,
        smooth: "easeInOutQuad",
        offset: -70,
      });
    }
  }, [location]);

  return null;
}
function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavbarHeader />
      <ScrollToTop />
      <ScrollToHash />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
