import React from "react";

const Button = ({ children, href, className }) => (
  <a href={href} className={`no-underline ${className}`}>
    {children}
  </a>
);

const DiscussButton = () => {
  return (
    <Button
      className="px-6 py-2 mx-auto ml-3 text-lg font-medium text-white transition duration-200 border-2 border-purple-800 rounded-full bg-theme-purple hover:bg-dark-theme-purple"
      href="/discuss-project"
    >
      Discuss Project
    </Button>
  );
};

export default DiscussButton;
