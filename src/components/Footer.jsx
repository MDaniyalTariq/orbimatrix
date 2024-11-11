import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto w-footer">
      <div className="flex content-center justify-center mb-9">
        <FaTwitter className="h-10 p-2 mr-3 border cursor-pointer text-Blue border-Pale-Blue w-11 rounded-3xl hover:text-white hover:bg-Blue " />
        <FaFacebook className="h-10 p-2 mr-3 border cursor-pointer text-Blue border-Pale-Blue w-11 rounded-3xl hover:text-white hover:bg-Blue " />
        <FaInstagram className="h-10 p-2 border cursor-pointer text-Blue border-Pale-Blue w-11 rounded-3xl hover:text-white hover:bg-Blue" />
      </div>
      <p className="text-center text-Gray">
        &copy; Copyright OrbiMatrix. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
