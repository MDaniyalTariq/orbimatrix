import React, { useState, useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Service({ data }) {
  const [activeService, setActiveService] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Check theme on component mount and when theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Check on mount
    checkTheme();

    // Set up observer to detect theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Floating animation variants
  const floatingAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/20 dark:from-purple-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['-50%', '-45%', '-50%'],
            y: ['-50%', '-55%', '-50%'],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/20 dark:from-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['25%', '20%', '25%'],
            y: ['25%', '20%', '25%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-theme-purple/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-gradient-heading dark:bg-gradient-heading-purple bg-clip-text">Our Services</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-gray-600 dark:text-gray-300">
              Cutting-edge solutions to transform your ideas into reality and help scale your business
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {data.map((service, index) => (
            <Fade
              direction={service.animation}
              delay={150 * index}
              key={index}
              triggerOnce
            >
              <motion.div
                className={`${isDarkMode
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:shadow-purple-500/20'
                  : 'bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-purple-500/10'
                } rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group`}
                whileHover={{
                  y: -10,
                  boxShadow: isDarkMode
                    ? "0 20px 25px -5px rgba(139, 92, 246, 0.15), 0 10px 10px -5px rgba(139, 92, 246, 0.1)"
                    : "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.05)"
                }}
                layoutId={`service-card-${index}`}
              >
                <div className="relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-52 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                  {/* Service icon with animated background */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-theme-purple/80 backdrop-blur-sm border border-purple-400/30 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-2xl text-white">{service.icon}</span>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-theme-purple to-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                    {service.description}
                  </p>

                  <AnimatePresence>
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`pt-4 mt-4 ${isDarkMode ? 'border-t border-gray-700/50' : 'border-t border-gray-200'}`}>
                          <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-semibold mb-3 flex items-center`}>
                            <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start"
                                variants={floatingAnimation}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 dark:bg-purple-500/10 flex items-center justify-center mr-3 mt-0.5">
                                  <svg className="w-4 h-4 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <motion.div
                            className="mt-6 flex justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <a
                              href="/contact"
                              className={`px-4 py-2 text-sm font-medium text-white bg-theme-purple rounded-full inline-flex items-center hover:bg-dark-theme-purple transition-colors duration-300`}
                            >
                              <span>Get Started</span>
                              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </a>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    className={`mt-4 ${isDarkMode
                      ? 'text-theme-purple hover:text-purple-300'
                      : 'text-theme-purple hover:text-dark-theme-purple'
                    } text-sm font-medium flex items-center transition-colors duration-300`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(activeService === index ? null : index);
                    }}
                  >
                    {activeService === index ? 'Show less' : 'Learn more'}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeService === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </Fade>
          ))}
        </div>

        <Zoom triggerOnce delay={300}>
          <div className="mt-16 text-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Discuss Your Project</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </div>
        </Zoom>

        {/* Service count indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100/20 dark:bg-gray-800/20 backdrop-blur-sm">
            {data.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${activeService === index
                  ? 'bg-theme-purple'
                  : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.5 }}
                onClick={() => setActiveService(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
