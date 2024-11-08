import React, { Component } from "react";

import Header from "parts/Header";
import HeroTeam from "parts/HeroTeam";
import AllTeam from "parts/AllTeam";
import Footer from "parts/Footer";

import { TeamMembers } from "json/landingPageData";
import HorizontalScrollBar from "components/HorizontalScrollBar";

export default class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HorizontalScrollBar />
        <Header />
        <HeroTeam />
        <AllTeam data={TeamMembers} />
        <Footer />
      </>
    );
  }
}
