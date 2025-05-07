import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const storedTheme = localStorage.getItem("theme");
  const defaultTheme = storedTheme ? storedTheme : "dark";
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme === "dark");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (defaultTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [defaultTheme]);

  const toggleDarkMode = () => {
    setIsAnimating(true);

    setTimeout(() => {
      const newTheme = isDarkMode ? "light" : "dark";

      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      setIsDarkMode(!isDarkMode);
      localStorage.setItem("theme", newTheme);

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 150);
  };

  return (
    <div className="relative z-50">
      <button
        aria-label="Toggle theme"
        className={`relative focus:outline-none w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
        } active:scale-95`}
        onClick={toggleDarkMode}
      >
        <div className={`absolute inset-0 rounded-full ${isAnimating ? 'animate-ping opacity-30' : 'opacity-0'} ${
          isDarkMode ? 'bg-yellow-400' : 'bg-blue-400'
        }`}></div>

        <div className="relative transition-all duration-500 transform">
          {isDarkMode ? (
            <FaSun className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ${isAnimating ? 'animate-spin' : ''}`} />
          ) : (
            <FaMoon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ${isAnimating ? 'animate-spin' : ''}`} />
          )}
        </div>
        <span className="sr-only">{isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
