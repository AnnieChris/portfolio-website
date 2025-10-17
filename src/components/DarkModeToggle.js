import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Decide mode on first load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode !== null) {
      // 1️⃣ User preference
      setDarkMode(JSON.parse(savedMode));
    } else {
      // 2️⃣ System preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (prefersDark) {
        setDarkMode(true);
      } else {
        // 3️⃣ Time-based fallback
        const hour = new Date().getHours();
        const isNightTime = hour >= 19 || hour < 7; // 7 PM – 7 AM
        setDarkMode(isNightTime);
      }
    }
  }, []);

  // Watch for system theme changes (only if user hasn't set manual)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("darkMode")) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Apply the theme
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      title="Toggle dark/light mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
