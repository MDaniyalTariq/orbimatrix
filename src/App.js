/* eslint-disable */
import { Route, Routes } from "react-router-dom";

// import LandingPage from "pages/LandingPage";
// import ProjectPage from "pages/ProjectPage";
// import NotFoundPage from "pages/NotFoundPage";
// import TeamPage from "pages/TeamPage";

// import { ProjectDetailPage } from "pages/ProjectDetailPage";
// import { DiscussProjectPage } from "pages/DiscussProjectPage";
import News from "./components/News";
import Field from "./components/Field";
import dashboard from "./assets/main.png";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

import "./assets/css/styles.css";

function App() {
  const targetDate = "2024-12-31T23:59:59";
  return (
    <>
      <div className="box-border p-0 m-0">
        <News />
        <Field />
        <Timer targetDate={targetDate} />
        <img
          className="my-12 mx-auto w-image sm:w-morehalf lg:w-half 2xl:w-lesshalf"
          src={dashboard}
          alt="dashboard"
        />
        <Footer />
      </div>
      {/* <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/about" element={<TeamPage />} />
        <Route exact path="/contact" element={<TeamPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes> */}
    </>
  );
}

export default App;
