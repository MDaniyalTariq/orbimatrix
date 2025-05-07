// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function Advantage({ data }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedCards, setExpandedCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Enhanced data with additional information
  const enhancedData = [
    {
      ...data[0][0],
      icon: "💬",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/20 dark:bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-500 dark:text-blue-400",
      benefits: [
        "Real-time project updates",
        "Clear milestone tracking",
        "Transparent pricing",
        "24/7 client support"
      ],
      stats: "95% client satisfaction rate",
      quote: "The communication was excellent throughout the entire project."
    },
    {
      ...data[0][1],
      icon: "📊",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/20 dark:bg-purple-500/10",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-500 dark:text-purple-400",
      benefits: [
        "Agile development methodology",
        "Efficient resource allocation",
        "Risk mitigation strategies",
        "On-time delivery focus"
      ],
      stats: "98% of projects delivered on schedule",
      quote: "Their project management skills kept everything on track and on budget."
    },
    {
      ...data[1][0],
      icon: "🤝",
      color: "from-green-500 to-teal-400",
      bgColor: "bg-green-500/20 dark:bg-green-500/10",
      borderColor: "border-green-500/30",
      textColor: "text-green-500 dark:text-green-400",
      benefits: [
        "Cross-functional team approach",
        "Client involvement at every stage",
        "Iterative feedback loops",
        "Shared project vision"
      ],
      stats: "87% faster problem resolution",
      quote: "Working with their collaborative team made the process smooth and enjoyable."
    },
    {
      ...data[1][1],
      icon: "⭐",
      color: "from-amber-500 to-orange-400",
      bgColor: "bg-amber-500/20 dark:bg-amber-500/10",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-500 dark:text-amber-400",
      benefits: [
        "High client retention rate",
        "Award-winning solutions",
        "Personalized service approach",
        "Exceeding expectations"
      ],
      stats: "90% of clients return for additional projects",
      quote: "They consistently go above and beyond what's expected."
    }
  ];

  // Auto-expand all cards when section comes into view with staggered animation
  useEffect(() => {
    if (isInView) {
      // Stagger the expansion of cards
      const expandCards = async () => {
        // Wait for initial section animation
        await new Promise(resolve => setTimeout(resolve, 800));

        // Expand cards one by one with a delay
        for (let i = 0; i < enhancedData.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 200));
          setExpandedCards(prev => [...prev, i]);
        }
      };

      expandCards();

      return () => {
        // Cleanup function
        setExpandedCards([]);
      };
    } else {
      // Collapse all cards when section is out of view
      setExpandedCards([]);
    }
  }, [isInView, enhancedData.length]);



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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };



  return (
    <section id="why-choose-us" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-bl from-theme-purple/20 dark:from-theme-purple/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['10%', '15%', '10%'],
            y: ['-10%', '-15%', '-10%'],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/20 dark:from-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['-15%', '-10%', '-15%'],
            y: ['15%', '10%', '15%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-gradient-heading dark:bg-gradient-heading-purple bg-clip-text">Why Choose Us</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-gray-600 dark:text-gray-300">
              Partner with us for exceptional results that exceed expectations and drive your business forward
            </p>
          </Fade>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {enhancedData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${isDarkMode
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'
                : 'bg-white/90 backdrop-blur-sm border border-gray-200'
              } ${item.borderColor} rounded-2xl overflow-hidden shadow-xl transition-all duration-500 advantage-card`}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => {
                // Toggle the card in the expandedCards array
                setExpandedCards(prev => {
                  if (prev.includes(index)) {
                    return prev.filter(i => i !== index);
                  } else {
                    return [...prev, index];
                  }
                });
              }}
            >
              {/* Card header with colored gradient */}
              <div className={`h-2 w-full bg-gradient-to-r ${item.color}`}></div>

              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.bgColor} ${item.textColor}`}>
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {item.title}
                    </h3>
                    <div className={`text-xs font-medium mt-1 ${item.textColor}`}>
                      {item.stats}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {item.description}
                  </p>

                  <AnimatePresence mode="wait">
                    {expandedCards.includes(index) && (
                      <motion.div
                        key={`card-content-${index}`}
                        initial={{ opacity: 0, height: 0, scale: 0.95 }}
                        animate={{ opacity: 1, height: 'auto', scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                          height: { duration: 0.4 }
                        }}
                        className="mt-4"
                      >
                        <div className={`h-0.5 w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} mb-4`}></div>

                        {/* Benefits list */}
                        <div className="mb-4">
                          <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                            Key Benefits:
                          </h4>
                          <ul className="space-y-2">
                            {item.benefits.map((benefit, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: idx * 0.15,
                                  type: "spring",
                                  stiffness: 260,
                                  damping: 20
                                }}
                              >
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full ${item.bgColor} flex items-center justify-center mr-2 mt-0.5`}>
                                  <svg className={`w-3 h-3 ${item.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                                <span className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                  {benefit}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Client quote */}
                        <div className={`p-3 rounded-lg ${item.bgColor} ${isDarkMode ? 'bg-opacity-30' : 'bg-opacity-20'}`}>
                          <div className="flex items-start">
                            <svg className={`w-5 h-5 ${item.textColor} mr-2 flex-shrink-0`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className={`text-xs italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              "{item.quote}"
                            </p>
                          </div>
                        </div>

                        {/* Image and CTA */}
                        <div className="flex items-center justify-between mt-4">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-12 h-12 object-contain rounded-lg"
                          />
                          <motion.a
                            href="/contact"
                            className={`px-3 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r ${item.color}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Learn More
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative mt-4 w-full h-1 rounded-full overflow-hidden">
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                  <motion.div
                    className={`absolute h-full left-0 top-0 bg-gradient-to-r ${item.color}`}
                    initial={{ width: '30%' }}
                    animate={{
                      width: expandedCards.includes(index) ? '100%' : '30%'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Zoom triggerOnce delay={300}>
          <div className="mt-16 text-center">
            <motion.div
              className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl ${
                isDarkMode
                  ? 'bg-gray-800/70 backdrop-blur-sm border border-gray-700/50'
                  : 'bg-white/90 backdrop-blur-sm border border-gray-200'
              } max-w-4xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-theme-purple"></div>
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-theme-purple/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl"></div>

              <div className="flex flex-col sm:flex-row items-center justify-center relative z-10">
                <div className="mb-6 sm:mb-0 sm:mr-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-theme-purple to-blue-500 p-0.5">
                    <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center`}>
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    <span className="text-transparent bg-gradient-to-r from-blue-500 to-theme-purple bg-clip-text">100% Satisfaction Guarantee</span>
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl mb-4`}>
                    We're committed to your success. If you're not completely satisfied with our work, we'll make it right or refund your investment.
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
                    <div className={`px-3 py-1.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                      <svg className="w-3.5 h-3.5 mr-1.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      No questions asked
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                      <svg className="w-3.5 h-3.5 mr-1.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      30-day guarantee
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                      <svg className="w-3.5 h-3.5 mr-1.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Dedicated support
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Zoom>

        <div className="mt-16 flex justify-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Project</span>
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
