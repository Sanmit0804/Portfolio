import React, { useState, useEffect } from "react";
import "./themeToggle.css";

const ThemeToggle = () => {
  // Use system preference or default to light mode
  const getInitialTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    // Apply the theme when component mounts or when isDarkMode changes
    document.documentElement.className = isDarkMode ? "dark-theme" : "";
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="checkbox-wrapper-10">
      <input
        type="checkbox"
        id="cb5"
        className="tgl tgl-flip"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label
        htmlFor="cb5"
        data-tg-on="Light!"
        data-tg-off="Dark"
        className="tgl-btn"
      ></label>
    </div>
  );
};

export default ThemeToggle;
