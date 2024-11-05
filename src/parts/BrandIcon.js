/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import Button from "../elements/Button";

const logoPath = "./Orbimatrix-sm.png"; 

export default function BrandIcon() {
  return (
    <Button
      className="flex items-center" 
      type="link"
      href="/"
    >
      <img
        src={logoPath}
        alt="Brand Logo"
        className="w-4xl h-16 mr-2" 
      />
      <p className="text-theme-blue text-4xl font-medium">
        Orbi
        <span className="text-theme-purple">matrix</span>
      </p>
    </Button>
  );
}
