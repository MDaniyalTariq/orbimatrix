import React from "react";
import Button from "../elements/Button";

const logoPath = "./Orbimatrix-sm.png";

export default function BrandIcon() {
  return (
    <Button className="flex items-center" type="link" href="/">
      <img src={logoPath} alt="Brand Logo" className="h-16 mr-2 w-4xl" />
      <p className="text-4xl font-medium text-theme-blue dark:text-light-white">
        Orbi
        <span className="text-theme-purple ">matrix</span>
      </p>
    </Button>
  );
}
