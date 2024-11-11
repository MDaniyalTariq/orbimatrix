import { TeamMembers } from "json/landingPageData";
import React from "react";
import Fade from "react-awesome-reveal";

export default function AllTeam({ data }) {
  return (
    <section className="container px-2 py-12 mx-auto">
      <div className="grid gap-8 px-4 mb-6 lg:mb-16 md:grid-cols-2 xl:grid-cols-3 sm:px-6 lg:px-8">
        {TeamMembers.map((member, index) => (
          <Fade
            key={index}
            // @ts-ignore
            direction="up"
            triggerOnce
            delay={index * 100}
          >
            <div className="flex flex-col items-center py-2 transition-all duration-300 ease-in-out transform shadow-lg sm:py-0 xl:flex-row rounded-xl bg-gray-50 sm:flex dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="#" className="group">
                <img
                  className="object-cover w-32 h-32 transition-all duration-300 ease-in-out transform rounded-full sm:w-48 sm:h-48 xl:w-64 xl:h-64 sm:rounded-none sm:rounded-l-lg xl:mr-6 group-hover:scale-110 group-hover:rotate-3"
                  src={member.imageUrl}
                  alt={`${member.name} Avatar`}
                />
              </a>

              <div className="flex flex-col justify-center p-5 space-y-3 sm:p-6 xl:w-2/3">
                <h3 className="text-xl font-semibold tracking-tight text-center text-gray-900 transition-all duration-200 ease-in-out dark:text-white xl:text-left hover:text-blue-600 group-hover:text-blue-500">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-lg font-medium text-center text-gray-500 dark:text-gray-400 xl:text-left">
                  {member.title}
                </span>
                <p className="mt-3 mb-4 text-lg font-light text-center text-gray-500 dark:text-gray-400 xl:text-left">
                  {member.description}
                </p>

                <ul className="flex justify-center space-x-4 xl:justify-start sm:mt-0">
                  {Object.keys(member.socialLinks).map((social, i) => (
                    <li key={i}>
                      <a
                        href={member.socialLinks[social]}
                        className="text-gray-500 transition-all duration-200 hover:text-gray-900 dark:hover:text-white group-hover:text-blue-500"
                      >
                        {social === "instagram" && (
                          <img
                            className="w-6 h-6 transition-all duration-200 sm:w-7 sm:h-7 hover:scale-110 group-hover:scale-125"
                            src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
                            alt="Instagram"
                          />
                        )}
                        {social === "x" && (
                          <img
                            className="w-6 h-6 transition-all duration-200 sm:w-7 sm:h-7 hover:scale-110 group-hover:scale-125"
                            src="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
                            alt="X (formerly Twitter)"
                          />
                        )}
                        {social === "github" && (
                          <img
                            className="w-6 h-6 transition-all duration-200 sm:w-7 sm:h-7 hover:scale-110 group-hover:scale-125"
                            src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                            alt="GitHub"
                          />
                        )}
                        {social === "linkedin" && (
                          <img
                            className="w-6 h-6 transition-all duration-200 sm:w-7 sm:h-7 hover:scale-110 group-hover:scale-125"
                            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                            alt="LinkedIn"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
