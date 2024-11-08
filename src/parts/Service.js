import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Service({ data }) {
  return (
    <div className="">
      <div className="container pt-20 mx-auto pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl font-bold text-center text-transparent bg-gradient-heading bg-clip-text ">
            Our Services
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="mb-12 text-lg font-light text-center dark:text-gray-400">
            We're prepared to accelerate your business growth with our top-notch
            services.
          </p>
        </Fade>

        <div className="grid grid-rows-3 gap-8 px-10 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16 place-items-center">
          {data.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fade
              direction={item.animation}
              delay={500 * index}
              key={index}
              triggerOnce
            >
              <div className="relative max-w-sm overflow-hidden transition duration-500 transform border shadow-2xl group rounded-2xl border-light-theme-purple lg:hover:scale-105">
                <img
                  src={item.imageUrl}
                  alt="Service"
                  className="w-full rounded-t-2xl"
                />

                <div className="absolute inset-0 flex items-center justify-center p-6 text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <p className="text-lg text-center">{item.description}</p>
                </div>
                <h2 className="text-xl text-center py-7 rounded-b-2xl bg-gradient-heading ">
                  {item.title}
                </h2>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
