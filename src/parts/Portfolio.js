import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

export default function Portfolio({ data }) {
  return (
    <section className="container flex flex-col items-center mx-auto mt-20">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl font-bold text-center text-transparent bg-gradient-heading bg-clip-text">
          Our Selected Project
        </h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="mb-12 text-lg font-light text-center dark:text-gray-400">
          We are ready to scale up your business with our great work result.
        </p>
      </Fade>

      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fade
            direction="up"
            triggerOnce
            // @ts-ignore
            bottom
            delay={500 * index}
            key={index}
          >
            <Button type="link" href={`/project/${item.id}`}>
              <div className="w-auto m-3 transition duration-500 transform shadow-xl group rounded-2xl hover:scale-110 portofolio-card">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt="Portfolio"
                    className="z-0 rounded-t-2xl"
                  />
                  <div className="absolute top-0 flex justify-center w-full h-full bg-black rounded-b opacity-0 rounded-t-2xl img-hover">
                    <button className="focus:outline-none">
                      <svg
                        className="w-20 h-20 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="py-4">
                  <h2 className="text-xl text-center text-transparent bg-gradient-heading bg-clip-text ">
                    {item.title}
                  </h2>
                  <p className="font-light text-center text-gray-400">
                    {item.type}
                  </p>
                </div>
              </div>
            </Button>
          </Fade>
        ))}
      </div>

      <Fade
        // @ts-ignore
        bottom
        triggerOnce
      >
        <Button
          href="/project"
          type="link"
          className="flex items-center justify-center flex-grow-0 h-12 px-5 transition duration-300 border rounded-full w-36 sm:w-40 sm:h-14 lg:w-44 lg:h-16 xl:w-36 xl:h-12 text-theme-purple border-theme-purple mt-14 hover:bg-theme-purple hover:text-white"
        >
          <p className="py-3 font-normal lg:text-lg xl:text-base">See More</p>
          <svg
            className="w-4 h-4"
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
          <svg
            className="w-4 h-4 -ml-2"
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
    </section>
  );
}
