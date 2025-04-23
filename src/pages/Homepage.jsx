import React from "react";

import "./../style/home.scss";
import Homehero from "../section/homepage/Hero";
import WhyUs from "../section/homepage/Why";
import HomeServices from "../section/homepage/Services";
import Chooseus from "../section/homepage/Chooseus";
import HomeContact from "../section/homepage/Contact";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <Homehero />
        <WhyUs />
        <HomeServices />
        <Chooseus />
        <HomeContact />
      </div>
    </>
  );
};

export default Homepage;
