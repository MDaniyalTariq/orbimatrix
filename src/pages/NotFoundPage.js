

import React, { Component } from 'react';
import Button from 'elements/Button';
import NotFound from 'assets/images/NotFound.png';
import Header from 'parts/Header';

export default class NotFoundPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex flex-col w-full h-screen justify-center bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
          <div className="flex w-full justify-center">
            <img
              src={NotFound}
              alt="Not Found"
              className="sm:w-3/4 xl:w-5/12 animate-float"
            />
          </div>
          <h1 className="text-white text-3xl md:text-4xl text-center mt-8 font-bold">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">404</span> - Page Not Found
          </h1>
          <p className="text-gray-300 text-xl text-center mt-4 max-w-2xl mx-auto px-4">
            You weren't supposed to find this place... The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center mt-8">
            <Button
              href="/"
              type="link"
              className="flex items-center gap-2 px-8 py-3 bg-theme-purple text-white rounded-full shadow-lg transform transition duration-500 hover:bg-dark-theme-purple hover:scale-105 hover:shadow-purple-500/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Home
            </Button>
          </div>
        </div>
      </>
    );
  }
}
