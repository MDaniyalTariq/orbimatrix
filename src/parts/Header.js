/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */

import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import BrandIcon from "./BrandIcon";

const Button = ({ children, href, className }) => (
  <a href={href} className={`no-underline  ${className}`}>
    {children}
  </a>
);

const Header = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header className="header flex justify-between px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <BrandIcon />
        <div className="flex items-center space-x-4">
          <div className="relative lg:hidden">
            <button
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
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={toggleDarkMode}
                    >
                      {isDarkMode
                        ? "Switch to Light Mode"
                        : "Switch to Dark Mode"}
                    </button>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>

          <button
            className="block text-theme-blue lg:hidden focus:outline-none"
            onClick={() => setIsCollapse((prev) => !prev)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className={`${isCollapse ? "hidden" : "block"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                className={`${!isCollapse ? "hidden" : "block"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
        {["/", "/team", "/about", "/contact", "/project"].map((link, index) => (
          <li key={link} className="py-2 lg:py-0">
            <Button
              className={`${
                path === link ? "active-link" : ""
              } font-medium xl:text-lg text-sm px-5`}
              href={link}
            >
              {link === "/"
                ? "Home"
                : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
            </Button>
          </li>
        ))}

        <li>
          <Button
            className="font-medium text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
            href="/discuss-project"
          >
            Discuss Project
          </Button>
        </li>

        <li>
          <div className="relative px-5">
            <button
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
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={toggleDarkMode}
                    >
                      {isDarkMode
                        ? "Switch to Light Mode"
                        : "Switch to Dark Mode"}
                    </button>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            {["/", "/team", "/about", "/contact", "/project"].map((link) => (
              <li className="py-2 bg-white" key={link}>
                <Button
                  className={`${
                    path === link ? "active-link" : ""
                  } font-medium px-10`}
                  href={link}
                >
                  {link === "/"
                    ? "Home"
                    : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                </Button>
              </li>
            ))}
            <li className="mx-auto my-9 bg-white">
              <Button
                className="font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
                href="/discuss-project"
              >
                Discuss Project
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
