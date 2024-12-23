import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import BrandIcon from "./BrandIcon";
import DiscussButton from "./DiscussButton";
import ThemeToggle from "./ThemeToggle";

const Button = ({ children, href, className }) => (
  <a href={href} className={`no-underline ${className}`}>
    {children}
  </a>
);

const Header = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="flex justify-between px-4 header lg:px-0">
      <div className="flex items-center justify-between">
        <BrandIcon />
        <div className="flex items-center space-x-4">
          <div className="relative lg:hidden">
            <ThemeToggle />
          </div>

          <button
            className="block text-theme-purple lg:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
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

      <ul className=" flex-row items-center hidden mt-0 tracking-widest text-theme-blue dark:text-secondry-white lg:flex">
        {["/", "/team", "/about", "/contact", "/project"].map((link) => (
          <li key={link} className="py-2 lg:py-0 z-50">
            <Button
              className={`${
                path === link
                  ? "text-theme-purple dark:text-theme-purple "
                  : "text-theme-blue dark:text-secondry-white"
              } font-medium xl:text-lg text-sm px-5`}
              href={link}
            >
              {link === "/"
                ? "Home"
                : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
            </Button>
          </li>
        ))}

        <li className="z-50">
          <DiscussButton />
        </li>

        <li>
          <div className="relative px-5">
            <ThemeToggle />
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
          <ul className="absolute z-40 flex flex-col w-full my-6 tracking-widest bg-white border-b-2 dark:border-gray-800 dark:bg-dark-bg text-theme-blue lg:hidden">
            {["/", "/team", "/about", "/contact", "/project"].map((link) => (
              <li className="py-2 bg-white dark:bg-dark-bg" key={link}>
                <Button
                  className={`${
                    path === link
                      ? "text-theme-purple dark:text-theme-purple "
                      : "text-theme-blue dark:text-secondry-white"
                    // path === link ? "active-link" : ""
                  } font-medium px-10`}
                  href={link}
                >
                  {link === "/"
                    ? "Home"
                    : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                </Button>
              </li>
            ))}
            <li className="mx-auto my-9">
              <DiscussButton />
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
