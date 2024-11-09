import React from "react";

import { Fade } from "react-awesome-reveal";

import Team from "assets/images/TeamMembers/team5.png";

export default function HeroTeam() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-transparent bg-gradient-heading bg-clip-text font-bold leading-tight mb-5">
            Our Team
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="font-light text-xl dark:text-gray-400 leading-relaxed">
            Our team of passionate experts combines innovation and precision to
            turn your vision into powerful, custom-built software solutions.
          </p>
        </Fade>
      </div>
      <div className="flex w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2 mt-[-20px]">
        <Fade direction="top-right" triggerOnce delay={300}>
          <img src={Team} alt="Hero" className="pt-1" />
        </Fade>
      </div>
    </section>
  );
}
