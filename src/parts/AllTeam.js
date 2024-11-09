import React from "react";
import Fade from "react-awesome-reveal";

export default function AllTeam({ data }) {
  return (
    <section className="container mx-4 sm:mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-y-8 gap-x-8 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-12 justify-items-center">
        {data.map((item, index) => (
          <Fade
            // @ts-ignore
            bottom
            triggerOnce
            delay={200 * index}
            key={index}
          >
            <div>
              <div className="flex flex-col w-48 h-60 sm:w-56 sm:h-72 md:w-60 md:h-80 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105 dark:bg-[#1B1F2B]">
                <div className="flex justify-center mb-5">
                  <img
                    src={item.imageUrl}
                    alt="Team Member"
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full"
                  />
                </div>
                <h2 className="text-transparent bg-gradient-heading bg-clip-text text-center text-xl">
                  {item.name}
                </h2>
                <p className="font-light text-gray-400 text-center mb-3">
                  {item.position}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
