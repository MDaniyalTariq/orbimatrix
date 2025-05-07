import React, { useState, useEffect, useRef } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Button from "../elements/Button";

export default function Portfolio({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  // Check theme and screen size on component mount and when changes occur
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial checks
    checkTheme();
    checkScreenSize();

    // Set up observers
    const themeObserver = new MutationObserver(checkTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    return () => {
      themeObserver.disconnect();
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Project type badges with appropriate colors
  const getTypeBadgeColor = (type) => {
    if (type.toLowerCase().includes('web3')) {
      return 'bg-purple-500/20 text-purple-500 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-500/30';
    } else if (type.toLowerCase().includes('web')) {
      return 'bg-blue-500/20 text-blue-500 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/30';
    } else if (type.toLowerCase().includes('staking')) {
      return 'bg-green-500/20 text-green-500 dark:bg-green-500/10 dark:text-green-400 border border-green-500/30';
    } else {
      return 'bg-theme-purple/20 text-theme-purple dark:bg-theme-purple/10 dark:text-theme-purple border border-theme-purple/30';
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Handle showing more projects
  const handleShowMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, data.length));
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-500/20 dark:from-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['25%', '20%', '25%'],
            y: ['-25%', '-20%', '-25%'],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-theme-purple/20 dark:from-theme-purple/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['-25%', '-20%', '-25%'],
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
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl hidden lg:block"
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

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-gradient-heading dark:bg-gradient-heading-purple bg-clip-text">Our Selected Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-gray-600 dark:text-gray-300">
              Explore our portfolio of successful projects that showcase our expertise and innovation
            </p>
          </Fade>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {data.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`${isDarkMode
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:shadow-purple-500/20'
                : 'bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-purple-500/10'
              } rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group project-card`}
              onHoverStart={() => !isMobile && setActiveIndex(index)}
              onHoverEnd={() => !isMobile && setActiveIndex(null)}
              onTouchStart={() => isMobile && setActiveIndex(index === activeIndex ? null : index)}
            >
              <Button type="link" href={`/project/${project.id}`} className="block">
                <div className="relative overflow-hidden">
                  {/* Project image with overlay */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80"></div>

                    {/* Project type badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getTypeBadgeColor(project.type)}`}>
                        {project.type}
                      </span>
                    </div>

                    {/* View details button that appears on hover/touch */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="bg-theme-purple/80 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center space-x-2 border border-purple-400/30"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View Details</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Project info */}
                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {project.title}
                      </h3>
                    </div>

                    {/* Project responsibilities */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.responsibility && project.responsibility.map((resp, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-0.5 rounded-md ${
                            isDarkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {resp}
                        </span>
                      ))}
                    </div>

                    {/* Project description - truncated */}
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                      {project.description}
                    </p>

                    {/* Project link */}
                    <div className="mt-3 sm:mt-4 flex justify-between items-center">
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} truncate max-w-[70%]`}>
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <span className="truncate">{project.credit && project.credit.replace(/(^\w+:|^)\/\//, '')}</span>
                        </span>
                      </div>

                      <motion.div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                          isDarkMode
                            ? 'bg-gray-700 text-theme-purple'
                            : 'bg-gray-200 text-theme-purple'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Show more button */}
        {visibleProjects < data.length && (
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={handleShowMore}
              className={`px-6 py-2 rounded-full text-sm font-medium border ${
                isDarkMode
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300 flex items-center mx-auto`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Show More Projects</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </motion.div>
        )}

        <Zoom triggerOnce delay={300}>
          <div className="mt-12 sm:mt-16 text-center">
            <motion.a
              href="/project"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore All Projects</span>
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </div>
        </Zoom>

        {/* Project count indicator */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-100/20 dark:bg-gray-800/20 backdrop-blur-sm">
            {data.map((_, index) => (
              <motion.button
                key={index}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${index === activeIndex
                  ? 'bg-theme-purple'
                  : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.5 }}
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
