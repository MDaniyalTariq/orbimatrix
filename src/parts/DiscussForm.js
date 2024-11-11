// @ts-nocheck

import React from "react";

import { Fade } from "react-awesome-reveal";
import * as emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Form } from "elements/Form";
import Button from "elements/Button";

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: "Racxstudio",
      message: projectIdea,
    };

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      projectIdea !== ""
    ) {
      emailjs
        .send(
          "service_h4gtndg",
          "template_a9tvs7a",
          templateParams,
          "user_csqIxzN5mKsl1yw4ffJzV"
        )
        .then(
          () => {
            toast.success("Success! we'll get back to you soon. Thank you!");
            resetForm();
          },
          (error) => {
            toast.error(error);
          }
        );
    } else {
      toast.error("Please fill out the blank form.");
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center items-center">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-transparent bg-gradient-heading bg-clip-text text-center font-bold">
          Let's Discuss
        </h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg dark:text-gray-400 text-gray-600 text-center mb-12">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Please fill out the form below to discuss your project, and we'll get
          back to you in less than 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col items-center w-full px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-3xl">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your Company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-3xl mt-4">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your Email Address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your Contact Number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={actions.onChange}
            />
          </div>

          <div className="w-full max-w- 3xl mt-4">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Discuss Your Project Idea..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={actions.onChange}
            />
          </div>

          <Button
            className="w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center transition-transform duration-500 ease-in-out "
            type="submit"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>
    </section>
  );
};
