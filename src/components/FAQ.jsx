// @ts-nocheck

import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Accordion from "./Accordian";
import Heading from "./Heading";
import React from "react";

const accData = [
  {
    title: "What is the cost to participate?",
    content: "Participation simply requires tossing a coin.",
  },
  {
    title: "When are the drawings held?",
    content: "Winners are announced every three days!",
  },
  {
    title: "How are the Solana tokens distributed?",
    content:
      "The collected tokens are divided among the winners according to the specified percentages.",
  },
];

const FAQ = () => {
  return (
    <Section
      className="overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24"
      id="pricing"
    >
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
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
        </div>
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
