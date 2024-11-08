import React from "react";
import Button from "../elements/Button";

const logoPath = process.env.PUBLIC_URL + "/Orbimatrix-sm.png";

export default function BrandIcon() {
  return (
    <Button className="z-50 flex items-center" type="link" href="/">
      <img src={logoPath} alt="Brand Logo" className="h-16 mr-2 w-4xl" />
      <p className="text-4xl font-medium text-theme-blue dark:text-primary-white">
        Orbi
        <span className="text-theme-purple ">Matrix</span>
      </p>
    </Button>
  );
}
