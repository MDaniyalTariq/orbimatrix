import { TeamMembers } from "json/landingPageData";
import React from "react";
import Fade from "react-awesome-reveal";

export default function AllTeam({ data }) {
  return (
    <section className="container mx-auto py-12 px-2">
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 xl:grid-cols-3 px-4 sm:px-6 lg:px-8">
        {TeamMembers.map((member, index) => (
          <Fade
            key={index}
            // @ts-ignore
            direction="up"
            triggerOnce
            delay={index * 100}
          >
            <div className="py-2 sm:py-0 flex flex-col xl:flex-row items-center rounded-xl shadow-lg bg-gray-50 sm:flex dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="#" className="group">
                <img
                  className="w-32 h-32 sm:w-48 sm:h-48  xl:w-64 xl:h-64 rounded-full sm:rounded-none sm:rounded-l-lg object-cover xl:mr-6 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3"
                  src={member.imageUrl}
                  alt={`${member.name} Avatar`}
                />
              </a>

              <div className="p-5 sm:p-6 flex flex-col justify-center xl:w-2/3 space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center xl:text-left transition-all duration-200 ease-in-out hover:text-blue-600 group-hover:text-blue-500">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400 text-center xl:text-left text-lg font-medium">
                  {member.title}
                </span>
                <p className="mt-3 mb-4 text-gray-500 dark:text-gray-400 text-center xl:text-left font-light text-lg">
                  {member.description}
                </p>

                <ul className="flex justify-center xl:justify-start space-x-4 sm:mt-0">
                  {Object.keys(member.socialLinks).map((social, i) => (
                    <li key={i}>
                      <a
                        href={member.socialLinks[social]}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all duration-200 group-hover:text-blue-500"
                      >
                        {social === "instagram" && (
                          <img
                            className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-200 hover:scale-110 group-hover:scale-125"
                            src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
                            alt="Instagram"
                          />
                        )}
                        {social === "x" && (
                          <img
                            className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-200 hover:scale-110 group-hover:scale-125"
                            src="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
                            alt="X (formerly Twitter)"
                          />
                        )}
                        {social === "github" && (
                          <img
                            className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-200 hover:scale-110 group-hover:scale-125"
                            src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                            alt="GitHub"
                          />
                        )}
                        {social === "linkedin" && (
                          <img
                            className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-200 hover:scale-110 group-hover:scale-125"
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
