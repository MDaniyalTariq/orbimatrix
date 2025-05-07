import React, { useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Testimonial({ data }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Duplicate the testimonials for continuous scrolling
  const duplicatedData = [...data, ...data];

  // Create two sets of testimonials for opposite directions
  const topRowData = [...duplicatedData, ...duplicatedData];
  const bottomRowData = [...duplicatedData, ...duplicatedData].reverse();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Testimonial card component
  const TestimonialCard = ({ item, index, direction }) => {
    // Define accent colors based on index
    const accentColors = [
      { bg: "bg-purple-100 dark:bg-purple-900/20", text: "text-purple-600 dark:text-purple-400", icon: "text-purple-500" },
      { bg: "bg-indigo-100 dark:bg-indigo-900/20", text: "text-indigo-600 dark:text-indigo-400", icon: "text-indigo-500" },
      { bg: "bg-blue-100 dark:bg-blue-900/20", text: "text-blue-600 dark:text-blue-400", icon: "text-blue-500" },
      { bg: "bg-violet-100 dark:bg-violet-900/20", text: "text-violet-600 dark:text-violet-400", icon: "text-violet-500" },
      { bg: "bg-fuchsia-100 dark:bg-fuchsia-900/20", text: "text-fuchsia-600 dark:text-fuchsia-400", icon: "text-fuchsia-500" }
    ];

    const accent = accentColors[index % accentColors.length];

    return (
      <div
        className={`flex-shrink-0 relative mx-4 p-6 rounded-xl
        bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
        shadow-lg hover:shadow-xl
        transition-all duration-300
        w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px]
        transform hover:-translate-y-1`}
      >
        {/* Testimonial content */}
        <div className="relative mb-5 pb-5 border-b border-gray-100 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{item.testimoni}</p>
        </div>

        {/* Client info */}
        <div className="flex items-center">
          <img
            src={item.imageUrl}
            alt={`${item.name} testimonial`}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md"
          />
          <div className="ml-3 sm:ml-4 flex-1">
            <h3 className={`font-semibold text-base sm:text-lg ${accent.text}`}>
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.company}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <div className={`text-xs px-2 py-0.5 rounded-full ${accent.bg} ${accent.text}`}>
              Verified
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Animated background elements - similar to Services section */}
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
            ease: "easeInOut"
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 border border-purple-200 dark:border-purple-900 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-blue-200 dark:border-blue-900 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-purple-400 dark:bg-purple-700 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-indigo-400 dark:bg-indigo-700 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          <Fade direction="up">
            <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text sm:text-5xl">
              What Our Clients Say
            </h2>
          </Fade>
          <Fade direction="up" delay={300}>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600 dark:text-gray-300">
              Trusted by businesses worldwide to deliver exceptional results
            </p>
          </Fade>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Top row - scrolling left to right */}
        <div className="relative mb-8 overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {topRowData.map((item, index) => (
                <TestimonialCard
                  key={`top-${item.id}-${index}`}
                  item={item}
                  index={index}
                  direction="left"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row - scrolling right to left */}
        <div className="relative overflow-hidden">
          <div className="marquee-container-reverse">
            <div className="marquee-content-reverse">
              {bottomRowData.map((item, index) => (
                <TestimonialCard
                  key={`bottom-${item.id}-${index}`}
                  item={item}
                  index={index}
                  direction="right"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center mt-16 space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Ready to work with us?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-all bg-gradient-to-r from-purple-600 to-indigo-600 border border-transparent rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Start Your Project
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
