import React from "react";
import Button from "../elements/Button";

const logoPath = process.env.PUBLIC_URL + "/Orbimatrix-sm.png";

export default function BrandIcon() {
  return (
    <Button
      className="z-50 flex items-center group transition-all duration-300 hover:opacity-90 py-1"
      type="link"
      href="/"
    >
      <div className="relative flex-shrink-0">
        <img
          src={logoPath}
          alt="Brand Logo"
          className="h-8 xs:h-9 sm:h-10 md:h-12 mr-1.5 xs:mr-2 sm:mr-3 w-auto transition-transform duration-500 transform group-hover:scale-105 group-hover:rotate-3"
        />
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300 -z-10"></div>
      </div>
      <div className="transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-1 min-w-0">
        <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-theme-blue dark:text-primary-white tracking-tight truncate">
          Orbi<span className="text-theme-purple bg-clip-text">Matrix</span>
        </p>
        <p className="hidden xs:block text-[9px] xs:text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 -mt-1 tracking-wider">
          INNOVATIVE SOLUTIONS
        </p>
      </div>
    </Button>
  );
}
