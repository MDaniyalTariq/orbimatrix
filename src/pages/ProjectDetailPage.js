import React, { useEffect } from "react";

import Header from "parts/Header";
import { useParams } from "react-router-dom";
import PortfolioDetail from "parts/PortfolioDetail";
import Footer from "parts/Footer";

import { Portfolios } from "json/landingPageData";
import HorizontalScrollBar from "components/HorizontalScrollBar";

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const detailData = Portfolios.filter((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="relative">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block z-40">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-teal-500 blur-xl opacity-60 lg:opacity-90 lg:block hidden" />
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-indigo-700 blur-xl opacity-80" />
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-700 to-teal-500 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
        <Header />
      </section>
      <HorizontalScrollBar />

      <PortfolioDetail
        data={detailData.length === 1 ? [detailData[0]] : null}
      />
      <Footer />
    </>
  );
};
