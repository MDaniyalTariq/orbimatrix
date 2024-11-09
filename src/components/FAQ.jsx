// @ts-nocheck

import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Accordion from "./Accordian";
import Heading from "./Heading";
import React from "react";

const accData = [
  {
    title: "What services does Orbimatrix provide?",
    content:
      "Orbimatrix offers expert services in Web3, smart contracts, AI solutions, mobile app development, and more, utilizing the latest technologies to help scale your business.",
  },
  {
    title: "Why choose Orbimatrix for your project?",
    content:
      "Our mission is to provide services you trust and products you can entrust. We bring expertise, innovation, and reliability to every project, ensuring that your business needs are met effectively.",
  },
  {
    title: "How does Orbimatrix ensure project success?",
    content:
      "We follow a client-focused approach, integrating cutting-edge technology with tailored strategies to deliver scalable, high-quality solutions on time and within budget.",
  },
  {
    title: "What industries does Orbimatrix serve?",
    content:
      "Our solutions cater to various industries, including finance, healthcare, e-commerce, gaming, and more, adapting our expertise to each sector's unique challenges and opportunities.",
  },
  {
    title: "How can Orbimatrix help my business grow?",
    content:
      "Our Web3, AI, and mobile development services empower businesses to innovate and expand their digital presence, enhancing efficiency, security, and user engagement.",
  },
];

const FAQ = () => {
  return (
    <Section
      className="flex justify-center items-centeroverflow-hidden px-4 sm:px-8 md:px-16 lg:px-24"
      id="pricing"
    >
      <div className="container relative z-2">
        {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div> */}
        <Heading
          tag="Frequently Asked Questions about OrbiMatrix"
          title="Frequently Asked Questions"
          className="text-center mb-8"
        />
        <div className="mx-auto flex w-full flex-col items-center justify-center">
          <div className="h-[2px] w-full dark:bg-gradient-to-l from-[#1E2230] to-[rgba(30, 34, 48, 0)] mb-4"></div>

          <div className="w-full max-w-4xl space-y-4">
            {accData.map((acc, index) => {
              return (
                <div className="w-full" key={index}>
                  <Accordion title={acc.title} content={acc.content} />
                  <div className="h-[2px] w-full dark:bg-gradient-to-l from-[#1E2230] to-[rgba(30, 34, 48, 0)] mt-4"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
