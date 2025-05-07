import React from "react";

const Button = ({ children, href, className, onClick }) => (
  <a
    href={href}
    className={`no-underline ${className}`}
    onClick={onClick}
  >
    {children}
  </a>
);

const DiscussButton = ({ onClick }) => {
  return (
    <Button
      className="px-6 sm:px-8 py-3 mx-auto text-base font-medium text-white transition-all duration-300 border-0 rounded-full bg-theme-purple hover:bg-dark-theme-purple hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center w-full"
      href="/contact"
      onClick={onClick}
    >
      <span className="whitespace-nowrap">Discuss Project</span>
    </Button>
  );
};

export default DiscussButton;
