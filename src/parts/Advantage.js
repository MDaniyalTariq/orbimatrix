// @ts-nocheck

import React from "react";

import Fade from "react-awesome-reveal";

export default function Advantage({ data }) {
  return (
    <div className="py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl font-bold text-center text-transparent  bg-gradient-heading bg-clip-text">
            Why Choose Us
          </h1>

          <p className="mb-12 text-lg font-light text-center dark:text-gray-400 sm:mb-5 xl:mb-0">
            Why you should choose us to handle your project.
          </p>
        </Fade>

        <div className="flex flex-col sm:flex-row">
          <div className="flex-col">
            {data[0].map((item, index) => (
              <Fade bottom triggerOnce delay={500 * index} key={index}>
                <div>
                  <div className="flex flex-row items-center p-3 mx-3 my-6 transition duration-500 transform  border shadow-xl sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl border-light-theme-purple hover:scale-105">
                    <img src={item.imageUrl} alt="" className="w-1/3" />
                    <div className="flex-col pl-5">
                      <h2 className="text-2xl text-transparent  bg-gradient-heading bg-clip-text">
                        {item.title}
                      </h2>
                      <p className="font-light text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {data[1].map((item, index) => (
              <Fade bottom triggerOnce delay={500 * index} key={index}>
                <div>
                  <div className="flex flex-row items-center p-3 mx-3 my-6 transition duration-500 transform border shadow-xl sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl border-light-theme-purple hover:scale-105">
                    <img src={item.imageUrl} alt="" className="w-1/3" />
                    <div className="flex-col pl-5">
                      <h2 className="text-2xl text-transparent  bg-gradient-heading bg-clip-text">
                        {item.title}
                      </h2>
                      <p className="font-light text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
