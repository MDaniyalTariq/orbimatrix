// @ts-nocheck
"use client";
import Footer from "parts/Footer";
import Header from "parts/Header";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import "swiper/css/bundle";
import Saqib from "../assets/images/TeamMembers/saqib.png";
import Daniyal from "../assets/images/TeamMembers/daniyal.png";
import Momin from "../assets/images/TeamMembers/momin.png";
import Mahnoor from "../assets/images/TeamMembers/mahnoor.png";
import Maram from "../assets/images/TeamMembers/maram.png";
import suleman from "../assets/images/TeamMembers/suleman.png";

import Services from "../assets/images/hero/service2.png";
import HorizontalScrollBar from "components/HorizontalScrollBar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const AboutPage = () => {
  const teamMembers = [
    {
      name: "Saqib Iqbal",
      role: "Founder",
      image: Saqib,
      description:
        "As Founder, I am focused on driving Orbimatrix's vision forward, building our team, and expanding our impact in the Web3 and AI spaces.",
      links: {
        x: "https://x.com/neuro_crypt",
        linkedin: "https://www.linkedin.com/in/saqib77/",
      },
    },
    {
      name: "M Momin",
      role: "Co-Founder",
      image: Momin,
      description:
        "As a Co-Founder, I’m dedicated to developing and refining Orbimatrix's tech foundations and supporting our long-term goals.",
      links: {
        x: "https://x.com/momin99",
        linkedin: "https://www.linkedin.com/in/momin99/",
      },
    },
    {
      name: "Daniyal Tariq",
      role: "CTO",
      image: Daniyal,
      description:
        "As CTO, I lead our technical strategy and oversee the development of Software Development.",
      links: {
        x: "https://x.com/daniyal",
        linkedin: "https://www.linkedin.com/in/daniyal-tariq-wd/",
      },
    },
    {
      name: "Mahnoor Farooq",
      role: "Frontend Developer",
      image: Mahnoor,
      description:
        "As a Frontend Developer, I focus on creating engaging and intuitive user interfaces that enhance the Orbimatrix user experience.",
      links: {
        x: "https://x.com",
        linkedin: "https://www.linkedin.com/in/mahnoor-farooq-649690239/",
      },
    },
    {
      name: "Maram Gouider",
      role: "Social Media Marketer",
      image: Maram,
      description:
        "As a Social Media Marketer, I am responsible for building Orbimatrix's online presence and connecting with our community across platforms.",
      links: {
        x: "https://x.com",
        linkedin: "https://www.linkedin.com/in/maram-gouider-b27634337/",
      },
    },
    {
      name: "Muhammad Suleman",
      role: "Graphic Designer and video editor",
      image: suleman,
      description:
        "As a Designer, I craft visually compelling designs that align with Orbimatrix's brand and enhance our digital presence",
      links: {
        x: "https://x.com",
        linkedin: "https://www.linkedin.com/in/muhammad-suleman-34b005323",
      },
    },
  ];

  return (
    <>
      <HorizontalScrollBar />

      <section className="relative ">
        <div className="absolute inset-y-0 z-40 hidden w-full lg:w-1/2 lg:right-0 lg:block">
          {/* <span className="absolute hidden w-24 h-24 rotate-90 skew-x-12 bg-teal-500 -left-6 md:left-4 top-24 lg:top-28 rounded-3xl blur-xl opacity-60 lg:opacity-90 lg:block" /> */}
          <span className="absolute w-24 h-24 bg-indigo-700 right-4 bottom-12 rounded-3xl blur-xl opacity-80" />
        </div>
        <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-700 to-teal-500 -top-5 lg:left-0 blur-2xl opacity-40" />
        <Header />
      </section>

      <section className="relative ">
        <Fade direction="up" delay={500} triggerOnce>
          <section className="relative z-0 py-14 lg:py-1 ">
            <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
              <h1 className="max-w-2xl mx-auto mb-5 text-4xl font-bold text-center text-gray-800 font-manrope dark:text-gray-300 md:text-5xl md:leading-normal">
                Get to know the Team behind &nbsp;
                <span className="text-transparent bg-gradient-heading bg-clip-text">
                  Orbimatrix
                </span>
              </h1>
              <p className="max-w-sm mx-auto text-base font-normal leading-7 text-center dark:text-gray-300 mb-9">
                Services You Trust, Products You Can Entrust
              </p>
            </div>
          </section>
        </Fade>
        <section className="relative py-14 lg:py-22">
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box">
                <Fade direction="left" triggerOnce>
                  <img
                    src="/Orbimatrix-sm.png"
                    alt="About Us tailwind page"
                    width={300}
                    className="max-lg:mx-auto"
                  />
                </Fade>
                <h2 className="px-3 font-bold text-gray-900 mt-44text-3xl  lg:text-5xl font-manrope dark:text-white">
                  ORBIMATRIX
                </h2>
              </div>
              <div className="lg:pl-[100px] flex items-center">
                <div className="w-full data">
                  <Fade direction="right" triggerOnce>
                    <h2 className="relative text-4xl font-bold text-transparent font-manrope lg:text-5xl bg-gradient-heading bg-clip-text mb-9 max-lg:text-center">
                      About Us
                    </h2>
                  </Fade>
                  <Fade direction="left" triggerOnce>
                    <p className="max-w-2xl mx-auto text-xl font-normal leading-8 text-justify dark:text-gray-400 max-lg:text-center">
                      Leading the way in innovation, Orbimatrix develops
                      state-of-the-art Web3 games and AI-driven SaaS apps that
                      transform user experiences and generate new value using
                      blockchain and AI. Our goal is to combine the greatest
                      aspects of Web3 with AI to provide our users with strong
                      and user-friendly solutions, with an emphasis on smooth,
                      rewarding interactions.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-14 lg:py-24">
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
              <div className="flex items-center lg:pr-24">
                <div className="w-full data">
                  <Fade direction="right" triggerOnce>
                    <img
                      src={Services}
                      alt="About Us tailwind page"
                      className="block mx-auto lg:hidden mb-9"
                    />
                  </Fade>
                  <Fade direction="left" triggerOnce>
                    <h2 className="text-4xl font-bold text-transparent font-manrope lg:text-4xl bg-gradient-heading bg-clip-text mb-9 max-lg:text-center">
                      Services You Trust <br />
                      Products You Can Entrust
                    </h2>
                  </Fade>
                  <Fade direction="right" triggerOnce>
                    <p className="max-w-2xl mx-auto text-xl font-normal leading-8 text-justify dark:text-gray-400 max-lg:text-center">
                      Other than just the game and SaaS, Orbimatrix offers a
                      wide range of software development services. These include
                      mobile application development, customized AI solutions,
                      and web applications. Our team of expert developers has
                      the expertise to provide specific products that suit
                      different business needs, empowering organizations to grow
                      and thrive in this ever-evolving digital landscape.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="img-box lg:pl-24">
                <Fade direction="right" triggerOnce>
                  <img
                    src={Services}
                    alt="About Us tailwind page"
                    className="hidden lg:block"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <Fade direction="up" delay={500} triggerOnce>
          <section className="py-20 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center text-transparent font-manrope bg-gradient-heading bg-clip-text mb-14">
                Our results in numbers
              </h2>
              <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl ">
                  <div className="flex gap-5">
                    <div className="text-2xl font-bold text-indigo-600 font-manrope">
                      240%
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-xl font-semibold text-gray-900">
                        Company growth
                      </h4>
                      <p className="leading-5 text-gray-500 text-xm">
                        Company's remarkable growth journey as we continually
                        innovate and drive towards new heights of success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl ">
                  <div className="flex gap-5">
                    <div className="text-2xl font-bold text-indigo-600 font-manrope">
                      175+
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-xl font-semibold text-gray-900">
                        Company growth
                      </h4>
                      <p className="leading-5 text-gray-500 text-xm">
                        Our very talented team members are the powerhouse of
                        Orbimatrix and pillars of our success.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl ">
                  <div className="flex gap-5">
                    <div className="text-2xl font-bold text-indigo-600 font-manrope">
                      100%
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-xl font-semibold text-gray-900">
                        Dream Big, Earn Big!
                      </h4>
                      <p className="leading-5 text-gray-500 text-xm">
                        No time? No problem! Spend 1 Min & start Making money
                        today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <section className="py-14 lg:py-24">
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="mb-16 rounded-full">
                <h2 className="text-4xl font-bold text-center text-transparent font-manrope bg-gradient-heading bg-clip-text">
                  What our happy users say!
                </h2>
              </div>

              <Fade direction="up" delay={600} triggerOnce>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  className="mySwiper2"
                  slidesPerView={1}
                  spaceBetween={32}
                  loop={true}
                  pagination={{
                    clickable: true,
                    renderBullet: (index, className) =>
                      `<span class="${className} rounded-full w-3.5 h-3.5 mx-1 transition-all duration-300"></span>`,
                  }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                >
                  <SwiperSlide>
                    <div className="relative mb-20">
                      <div className="mx-auto max-w-max lg:max-w-4xl">
                        <p className="mb-8 text-lg leading-8 text-center dark:text-gray-400">
                          Playing this sports trivia game is a blast! Not only
                          do I get to test my knowledge and learn new facts, but
                          I also earn crypto rewards for every correct answer.
                          It's the perfect mix of fun and profit!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative mb-20">
                      <div className="mx-auto max-w-max lg:max-w-4xl">
                        <p className="mb-8 text-lg leading-8 text-center dark:text-gray-400">
                          I love how this game rewards me for what I know!
                          Competing in sports trivia has never been this fun,
                          and the crypto rewards are just the icing on the cake.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative mb-20">
                      <div className="mx-auto max-w-max lg:max-w-4xl">
                        <p className="mb-8 text-lg leading-8 text-center dark:text-gray-400">
                          As a sports fan, this trivia game is perfect for me.
                          I'm learning, competing, and earning crypto all at
                          once. It's like getting paid to have fun!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Fade>
            </div>
          </section>
        </Fade>

        <section className="py-14 lg:py-24 ">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Fade bottom delay={200} triggerOnce>
              <div className="mb-24">
                <h2 className="mb-6 text-4xl font-bold text-center text-transparent font-manrope bg-gradient-heading bg-clip-text">
                  Meet our Team!
                </h2>
                <p className="text-lg text-center dark:text-gray-400">
                  Founded in 2024 by Saqib, Orbimatrix aims to revolutionize
                  Gaming and AI Industry!
                </p>
              </div>
            </Fade>
            <Fade bottom delay={400} triggerOnce>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                className="teamswiper"
                slidesPerView={1}
                spaceBetween={32}
                loop={true}
                navigation={true}
                breakpoints={{
                  769: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-wrap items-center w-full xl:gap-8 gap-16 p-8 transition-all duration-500 group lg:flex-nowrap">
                      <div className="w-full h-64 lg:w-48">
                        <Fade bottom delay={index * 100 + 500} triggerOnce>
                          <img
                            src={member.image}
                            alt={member.name}
                            className="object-contain h-full mx-auto lg:mx-0 lg:w-full"
                          />
                        </Fade>
                      </div>
                      <div className="flex-1 text-center lg:text-left lg:max-w-xs">
                        <div className="pb-5 mb-5 border-b border-gray-300 border-solid">
                          <h6 className="mb-1 text-lg font-semibold dark:text-gray-300">
                            {member.name}
                          </h6>
                          <span className="text-sm dark:text-gray-400 group-hover:text-indigo-600">
                            {member.role}
                          </span>
                        </div>
                        <p className="leading-6 dark:text-gray-400 mb-7">
                          {member.description}
                        </p>
                        <div className="flex items-center justify-center gap-4 lg:justify-start">
                          <ul className="flex gap-4">
                            <li className="flex items-center justify-center w-12 h-12 text-white transition-all duration-500 bg-indigo-600 rounded-full cursor-pointer group dark:text-gray-900 dark:bg-gray-100 hover:bg-white hover:text-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white">
                              <a
                                href={member.links.x}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  className="w-5 h-5"
                                  width="32"
                                  height="32"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li className="flex items-center justify-center w-12 h-12 text-white transition-all duration-500 bg-indigo-600 rounded-full cursor-pointer group dark:text-gray-900 dark:bg-gray-100 hover:bg-white hover:text-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white">
                              <a
                                href={member.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  className="w-5 h-5"
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.2739 6.59559 7.2739 18.8859 7.2739 18.8859Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Fade>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};
