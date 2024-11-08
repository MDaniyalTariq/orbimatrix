import React, { useState, useEffect } from "react";
import { DiscussForm } from "parts/DiscussForm";

import Header from "parts/Header";
import Footer from "parts/Footer";

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
      <section className="relative">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block z-40">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
        <Header />
      </section>
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Footer />
    </>
  );
};
