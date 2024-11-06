// @ts-nocheck

import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProjectPage from "pages/ProjectPage";
import NotFoundPage from "pages/NotFoundPage";
import TeamPage from "pages/TeamPage";

import { ProjectDetailPage } from "pages/ProjectDetailPage";
import { DiscussProjectPage } from "pages/DiscussProjectPage";

import "./assets/css/styles.css";
import React from "react";

function App() {
  const targetDate = "2024-12-31T23:59:59";
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/about" element={<TeamPage />} />
        <Route exact path="/contact" element={<TeamPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
