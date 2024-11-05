import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-footer mx-auto">
      <div className="flex justify-center content-center mb-9">
        <FaTwitter className="mr-3 text-Blue border border-Pale-Blue p-2 w-11 h-10 rounded-3xl cursor-pointer hover:text-white hover:bg-Blue " />
        <FaFacebook className="mr-3 text-Blue border border-Pale-Blue p-2 w-11 h-10 rounded-3xl cursor-pointer hover:text-white hover:bg-Blue " />
        <FaInstagram className=" text-Blue border border-Pale-Blue p-2 w-11 h-10 rounded-3xl cursor-pointer hover:text-white hover:bg-Blue " />
      </div>
      <p className="text-Gray text-center">
        &copy; Copyright OrbiMatrix. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
