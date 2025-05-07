import React, { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  // Handle scroll event to create sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside or swiping down
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCollapse && !event.target.closest('.mobile-menu-container')) {
        setIsCollapse(false);
      }
    };

    // Handle swipe down gesture to close menu
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEndY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (isCollapse && touchEndY - touchStartY > 70) {
        // Swipe down detected
        setIsCollapse(false);
      }
      // Reset values
      touchStartY = 0;
      touchEndY = 0;
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isCollapse]);

  return (
    <>
      {/* Backdrop for mobile menu */}
      <Transition
        show={isCollapse}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsCollapse(false)}
          aria-hidden="true"
        ></div>
      </Transition>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-lg py-1 sm:py-2'
            : 'bg-transparent py-2 sm:py-3 md:py-4'
        } header`}
      >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <BrandIcon />
        </div>

        <nav className="hidden lg:block">
          <ul className="flex-row items-center mt-0 tracking-widest text-theme-blue dark:text-secondry-white flex">
            {["/", "/team", "/about", "/contact", "/project"].map((link) => (
              <li key={link} className="py-2 lg:py-0 z-50 relative group">
                <Button
                  className={`${
                    path === link
                      ? "text-theme-purple dark:text-theme-purple"
                      : "text-theme-blue dark:text-secondry-white"
                  } font-medium xl:text-lg text-sm px-5 py-2 transition-all duration-300 hover:text-theme-purple dark:hover:text-theme-purple relative`}
                  href={link}
                >
                  {link === "/"
                    ? "Home"
                    : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                  {path === link && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-theme-purple rounded-full"></span>
                  )}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-theme-purple rounded-full transition-all duration-300 group-hover:w-1/2"></span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end space-x-3 sm:space-x-4">
          <div className="relative">
            <ThemeToggle />
          </div>

          <div className="hidden lg:block">
            <div className="w-[160px]">
              <DiscussButton />
            </div>
          </div>

          <button
            className="relative block lg:hidden focus:outline-none transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95"
            aria-label="Toggle navigation menu"
            onClick={() => setIsCollapse((prev) => !prev)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-4 sm:w-6 sm:h-5 relative flex flex-col justify-between transform transition-all duration-300">
                <span
                  className={`w-full h-0.5 bg-theme-purple rounded-full transform transition-all duration-300 ${
                    isCollapse ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-theme-purple rounded-full transform transition-all duration-300 ${
                    isCollapse ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-theme-purple rounded-full transform transition-all duration-300 ${
                    isCollapse ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </div>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        <Transition
          show={isCollapse}
          enter="transition-all duration-300"
          enterFrom="opacity-0 -translate-y-2 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition-all duration-200"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 -translate-y-2 scale-95"
          className="mobile-menu-container"
        >
          <div className="transition duration-300 ease-in absolute top-full left-0 right-0 z-50 px-3 xs:px-4 pt-2">
            <div className="mobile-menu-wrapper bg-white dark:bg-gray-900 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 text-theme-blue lg:hidden overflow-hidden max-h-[85vh]">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-gray-700 dark:text-gray-200">Menu</p>
                    <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M12 19V5"></path>
                        <path d="M5 12l7 7 7-7"></path>
                      </svg>
                      <span>Swipe down to close</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCollapse(false)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-700 dark:text-gray-200"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <ul className="flex flex-col w-full tracking-widest overflow-visible py-2">
                {["/", "/team", "/about", "/contact", "/project"].map((link, index) => (
                  <li
                    className="w-full"
                    key={link}
                  >
                    <Button
                      className={`${
                        path === link
                          ? "text-theme-purple dark:text-theme-purple bg-gray-100 dark:bg-gray-800"
                          : "text-theme-blue dark:text-white"
                      } font-medium px-4 xs:px-6 py-3 xs:py-4 rounded-xl mx-2 my-1 flex items-center w-[calc(100%-16px)] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                      href={link}
                      onClick={() => setIsCollapse(false)}
                    >
                      <span className="w-7 h-7 xs:w-8 xs:h-8 mr-2 xs:mr-3 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                        {link === "/" ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        ) : link === "/team" ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        ) : link === "/about" ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        ) : link === "/contact" ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
                        )}
                      </span>
                      {link === "/"
                        ? "Home"
                        : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                    </Button>
                  </li>
                ))}
              </ul>

              <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex flex-col items-center">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-5">Ready to start a project?</p>
                <div className="flex justify-center w-full">
                  <div className="w-full max-w-[240px]">
                    <DiscussButton onClick={() => setIsCollapse(false)} />
                  </div>
                </div>

                <div className="flex items-center justify-center mt-6 space-x-4">
                  <a
                    href="https://t.me/+LQVH8V4gvLcyYWY0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0088cc] text-white hover:opacity-90 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
    </>
  );
};

export default Header;
