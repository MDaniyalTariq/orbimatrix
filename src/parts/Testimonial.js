import React from "react";

import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial({ data }) {
  return (
    <section className="container mx-auto">
      <Fade direction="up">
        <h1 className="text-5xl font-bold text-center text-transparent bg-gradient-heading bg-clip-text">
          Testimonials
        </h1>
      </Fade>
      <Fade direction="up" delay={500}>
        <p className="mb-3 text-lg font-light text-center dark:text-gray-400 sm:mb-3 xl:mb-4">
          What they said about us.
        </p>
      </Fade>
      {/* eslint-disable-next-line react/jsx-max-props-per-line */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex-col px-6 py-4 mx-2 mt-4 mb-4 border shadow-xl xl:w-3/4 rounded-lg sm:shadow-md xl:mx-auto sm:mx-4 sm:mb-8">
              <div className="flex items-center mb-4">
                <img
                  src={item.imageUrl}
                  alt="Testimoni"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-col pl-4">
                  <h2 className="text-xl text-transparent bg-gradient-heading bg-clip-text">
                    {item.name}
                  </h2>
                  <p className="font-light text-gray-400 text-sm">
                    {item.company}
                  </p>
                </div>
              </div>
              <p className="pt-2 pb-1 pl-4 text-xl font-light dark:text-gray-400">
                {item.testimoni}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
