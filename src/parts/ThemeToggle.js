import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const storedTheme = localStorage.getItem("theme");
  const defaultTheme = storedTheme ? storedTheme : "dark"; 
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme === "dark");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (defaultTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [defaultTheme]);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        aria-label="Toggle dropdown"
        className="relative focus:outline-none"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        {isDarkMode ? (
          <FaSun className="w-6 h-6 text-yellow-500" />
        ) : (
          <FaMoon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      <Transition
        show={isDropdownOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 transform scale-95"
        enterTo="opacity-100 transform scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 transform scale-100"
        leaveTo="opacity-0 transform scale-95"
      >
        <div className="absolute right-0 z-50 w-48 mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800">
          <ul className="py-1">
            <li>
              <button
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default ThemeToggle;
