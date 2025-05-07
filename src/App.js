// @ts-nocheck

import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProjectPage from "pages/ProjectPage";
import NotFoundPage from "pages/NotFoundPage";
import TeamPage from "pages/TeamPage";

import { ProjectDetailPage } from "pages/ProjectDetailPage";
import { DiscussProjectPage } from "pages/DiscussProjectPage";
import { AboutPage } from "pages/AboutPage";
import "./assets/css/styles.css";
import React, { useEffect } from "react";
import ContactPage from "pages/ContactPage";
import { LiveChatWidget } from "@livechat/widget-react";

function App() {
  // Initialize theme on app load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#191C27"; // dark-bg color
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff"; // light background
    }
  }, []);

  return (
    <>
      <LiveChatWidget license="18854253" />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
