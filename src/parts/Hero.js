// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Button from "../elements/Button";
import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

// Animated shapes component
const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Purple circle */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl"
        style={{ top: '10%', right: '5%' }}
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blue circle */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl"
        style={{ bottom: '15%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Small purple dot */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-purple-600/30 blur-sm hidden lg:block"
        style={{ top: '30%', left: '15%' }}
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Small blue dot */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-blue-600/30 blur-sm hidden lg:block"
        style={{ bottom: '25%', right: '20%' }}
        animate={{
          x: [0, -8, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

// Stats component
const Stats = () => {
  return (
    <div className="flex flex-wrap justify-start gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 mt-6 sm:mt-8 mb-6 sm:mb-8 md:mb-10">
      <Fade direction="up" cascade damping={0.1} triggerOnce>
        <div className="flex items-center">
          <span className="text-2xl sm:text-3xl font-bold text-theme-purple mr-2">10+</span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects<br/>Completed</span>
        </div>
        <div className="flex items-center">
          <span className="text-2xl sm:text-3xl font-bold text-theme-purple mr-2">8+</span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Happy<br/>Clients</span>
        </div>
        <div className="flex items-center">
          <span className="text-2xl sm:text-3xl font-bold text-theme-purple mr-2">2+</span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years<br/>Experience</span>
        </div>
      </Fade>
    </div>
  );
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a small delay for better animation sequence
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero relative overflow-hidden pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-8 sm:pb-12 md:pb-16">
      {/* Background animated shapes */}
      <AnimatedShapes />

      <div className="flex flex-col md:flex-row w-full relative z-10">
        <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-8 flex flex-col justify-center mb-8 md:mb-0">
          <Fade direction="up" triggerOnce>
            <h1 className="mb-3 sm:mb-5 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <div className="mb-0.5 sm:mb-1">
                <span className="text-transparent bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text inline-block">
                  Services
                </span>
                <span className="text-blue-600 dark:text-blue-400 inline-block ml-1">You</span>
                <span className="text-transparent bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text inline-block ml-1">
                  Trust
                </span>
                <span className="text-white inline-block ml-0.5">,</span>
              </div>
              <div>
                <span className="text-transparent bg-gradient-to-r from-[rgb(171,71,188)] to-[rgba(171,71,188,0.7)] bg-clip-text inline-block">
                  Products
                </span>
                <span className="text-blue-600 dark:text-blue-400 inline-block ml-1">You</span>
                <span className="text-blue-600 dark:text-blue-400 inline-block ml-1">Can</span>
                <span className="text-transparent bg-gradient-to-r from-[rgb(171,71,188)] to-[rgba(171,71,188,0.7)] bg-clip-text inline-block ml-1">
                  Entrust
                </span>
              </div>
            </h1>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <p className="mb-5 sm:mb-7 text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
              We deliver <span className="font-medium">expert Web3, smart contract, AI, and mobile development</span> solutions using cutting-edge technologies to transform your ideas into reality and help scale your business.
            </p>
          </Fade>

          <div className="flex flex-row flex-wrap gap-8 sm:gap-12 mt-4 mb-8">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-theme-purple">10+</span>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects<br/>Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-theme-purple">8+</span>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Happy<br/>Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-theme-purple">2+</span>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years<br/>Experience</span>
              </div>
            </Fade>
          </div>

          <Fade direction="up" delay={400} triggerOnce>
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <Button
                href="/project"
                type="link"
                className="group flex items-center py-3 sm:py-4 text-base sm:text-lg text-white transition-all duration-300 shadow-xl rounded-full px-6 sm:px-8 bg-theme-purple hover:bg-dark-theme-purple hover:shadow-purple-500/30 hover:-translate-y-1 transform"
              >
                <span>See Our Work</span>
                <svg
                  className="ml-2 text-white w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300"
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

              <Button
                href="/contact"
                type="link"
                className="group flex items-center py-3 sm:py-4 text-base sm:text-lg text-theme-purple border-2 border-theme-purple transition-all duration-300 rounded-full px-4 sm:px-6 hover:bg-theme-purple/10 hover:-translate-y-1 transform"
              >
                <span>Contact Us</span>
              </Button>
            </div>
          </Fade>

          <Fade direction="up" delay={600} triggerOnce>
            <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/men/51.jpg" alt="Client" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Trusted by</span> industry leaders worldwide
              </p>
            </div>
          </Fade>
        </div>

        <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-8 flex justify-center items-center relative z-10">
          <Zoom triggerOnce>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative max-w-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Container for image and badges to ensure proper z-index stacking */}
              <div className="relative px-4 sm:px-8 md:px-10">
                {/* Floating badges - positioned before the image in the DOM but with higher z-index */}
                <motion.div
                  className="absolute -left-2 sm:-left-4 top-1/4 bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 rounded-full py-1.5 sm:py-2 px-3 sm:px-4 flex items-center space-x-1 sm:space-x-2 z-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -5, 0]
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    y: {
                      delay: 1,
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-yellow-500 text-base sm:text-lg">⭐</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">Top Rated</span>
                </motion.div>

                <motion.div
                  className="absolute -right-1 sm:-right-2 bottom-1/4 bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 rounded-full py-1.5 sm:py-2 px-3 sm:px-4 flex items-center space-x-1 sm:space-x-2 z-20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, 5, 0]
                  }}
                  transition={{
                    delay: 1,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    y: {
                      delay: 1.5,
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">Web3 Experts</span>
                </motion.div>

                {/* Image */}
                <motion.img
                  className="relative z-10 max-w-full w-full rounded-2xl shadow-2xl transform"
                  src={BuildWebsite}
                  alt="Build Website"
                  loading="lazy"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}
