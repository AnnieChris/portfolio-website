import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";


const DarkModeToggle = () => {
  // Call the function to get initial mode
const getInitialMode = () => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6; // Dark mode from 6 PM to 6 AM
  };
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());
  
 useEffect(() => {
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(isDarkMode ? "dark-mode" : "light-mode");
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      variant="outline-warning"
      className="dark-mode-toggle fs-4 px-2 py-0 shadow-sm"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default DarkModeToggle;
