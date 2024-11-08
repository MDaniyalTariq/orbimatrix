import React, { useState, useEffect } from "react";

const HorizontalScrollBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-1 bg-gray-300 dark:bg-[#2d3748]">
      <div
        className="h-full bg-blue-500"
        style={{
          width: `${scrollWidth}%`,
          transition: "width 0.2s ease-out", 
        }}
      />
    </div>
  );
};

export default HorizontalScrollBar;
