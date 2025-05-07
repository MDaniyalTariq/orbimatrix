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
      <Header />
      <HorizontalScrollBar />
      <section className="relative mt-8">
        <div className="absolute inset-y-0 z-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
          <span className="absolute w-24 h-24 bg-indigo-700 right-4 bottom-12 rounded-3xl blur-xl opacity-80" />
        </div>
        <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-700 to-teal-500 -top-5 lg:left-0 blur-2xl opacity-40" />
      </section>

      <PortfolioDetail
        data={detailData.length === 1 ? [detailData[0]] : null}
      />
      <Footer />
    </>
  );
};
