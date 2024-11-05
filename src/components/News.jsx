/* eslint-disable */
import React from "react";

const logo = "./Orbimatrix-sm.png";

const News = () => {
  return (
    <div className=" w-container flex flex-col justify-center items-center mx-auto p-6 text-center">
      <img className="my-10" src={logo} />
      <h1 className="text-Gray font-light text-big md:text-4xl lg:text-5xl py-1">
        We are launching{" "}
        <span className="text-Very-DBlue font-extrabold">soon!</span>
      </h1>
      <p className="text-md md:text-lg lg:text-xl text-Very-DBlue font-light py-3">
        Subscribe and get notified
      </p>
    </div>
  );
};

export default News;
