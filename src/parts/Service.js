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

        <div className="grid grid-rows-3 gap-8 px-10 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fade
              direction={item.animation}
              delay={500 * index}
              key={index}
              triggerOnce
            >
              <div className="transition duration-500 transform bg-[#272B36] border border-gray-600 shadow-xl group rounded-xl hover:scale-105 hover:shadow-2xl hover:rotate-1 max-w-xs m-auto">
                <img
                  src={item.imageUrl}
                  alt="Service"
                  // className="object-cover w-full h-48 rounded-t-xl"
                />
                <h2 className="px-3 py-5 text-lg text-center text-white transition-colors duration-300 rounded-b-xl group-hover:text-theme-blue">
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
