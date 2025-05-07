import React, { useState, useEffect } from "react";
import DiscussForm from "parts/DiscussForm";

import Header from "parts/Header";
import Footer from "parts/Footer";
import HorizontalScrollBar from "components/HorizontalScrollBar";

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  // Reset form data
  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: "",
    });
  };

  return (
    <>
      <Header />
      <HorizontalScrollBar />
      <section className="relative mt-8">
        <div className="absolute inset-y-0 z-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
          <span className="absolute w-24 h-24 bg-indigo-700 right-4 bottom-12 rounded-3xl blur-xl opacity-80" />
        </div>
        <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-700 to-teal-500 -top-5 lg:left-0 blur-2xl opacity-40" />
      </section>

      <DiscussForm />
      <Footer />
    </>
  );
};
