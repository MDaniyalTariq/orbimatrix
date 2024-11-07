// @ts-nocheck
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w-full mt-8 lg:w-1/2  sm:pr-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight sm:text-6xl text-light-theme-blue">
          <span className="text-gradient bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text">
            Services{" "}
          </span>
          You{" "}
          <span className="text-gradient bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text">
            Trust
          </span>
          <br />
          <span className="text-gradient bg-gradient-to-r from-[rgb(171,71,188)] to-[rgba(171,71,188,0.7)] text-transparent bg-clip-text">
            Products
          </span>
          <br className="hidden xl:inline" />
          You Can{" "}
          <span className="text-gradient bg-gradient-to-r from-[rgb(171,71,188)] to-[rgba(171,71,188,0.7)] text-transparent bg-clip-text">
            Entrust
          </span>
        </h1>

        <p className="mb-16 text-xl font-light leading-relaxed text-gray-400">
          We provide developers & designers using latest technologies to help
          you scale up your business.
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex items-center py-5 text-xl text-white transition duration-200 rounded-lg shadow-2xl w-71 h-18 px-14 bg-theme-purple hover:bg-dark-theme-purple"
          >
            See Our Work
            <svg
              className="ml-2 text-white w-7 h-7 animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Fade>
      </div>
      <div className="flex items-center justify-center order-first w-full md:w-fit md:order-first lg:order-last lg:w-[43%] ">
        <Fade direction="up" triggerOnce>
          <img
            className=""
            src={BuildWebsite}
            alt="Build Website"
            loading="lazy"
          />
        </Fade>
      </div>
    </section>
  );
}
