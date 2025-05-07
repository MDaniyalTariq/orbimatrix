"use client";
import Footer from "parts/Footer";
import ContactForm from "../components/ContactForm";

import React from "react";
import Header from "parts/Header";
import HorizontalScrollBar from "components/HorizontalScrollBar";
const ContactPage = () => {
  return (
    <>
      <Header />
      <HorizontalScrollBar />
      <section className="relative mt-8" id="contact">
        <div className="absolute inset-y-0 z-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
          <span className="absolute w-24 h-24 bg-indigo-700 right-4 bottom-12 rounded-3xl blur-xl opacity-80" />
        </div>
        <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-700 to-teal-500 -top-5 lg:left-0 blur-2xl opacity-40" />
      </section>
      <section>
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-1">
          <div className="mb-4">
            <div className="max-w-3xl mb-6 text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold tracking-wide text-gray-800 uppercase dark:text-white">
                Contact
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-transparent font-heading sm:text-5xl bg-gradient-heading bg-clip-text">
                Get in Touch
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-800 dark:text-white">
                We're here to help you with all things Web3, AI, and blockchain.
                Whether you're interested in play-to-earn games, NFT ticketing,
                or AI-powered betting, our team is ready to assist you.
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-justify text-gray-600 dark:text-white">
                  Orbimatrix is your gateway to the future of gaming and
                  entertainment. We specialize in creating innovative Web3
                  platforms that integrate AI and blockchain technology to
                  deliver cutting-edge experiences.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="mb-4 ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-800 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-500 dark:text-slate-400">
                        New York City, USA
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="mb-4 ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-800 dark:text-white">
                        Contact
                      </h3>
                      <a
                        href="mailto:contact@orbimatrix.com"
                        className="text-gray-500 dark:text-slate-400"
                      >
                        contact@orbimatrix.com
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="mb-4 ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-800 dark:text-white">
                        Working hours
                      </h3>
                      <p className="text-gray-500 dark:text-slate-400">
                        Monday - Friday: 08:00 AM - 8:00 PM
                      </p>
                      <p className="text-gray-500 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 AM - 12:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="max-w-6xl p-5 card h-fit md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-transparent bg-gradient-heading bg-clip-text">
                  Ready to Get Started?
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
