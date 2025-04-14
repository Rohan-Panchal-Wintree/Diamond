import React, { Fragment } from "react";
import AboutFirstSection from "../components/AboutFirstSection/AboutFirstSection";
import AboutSecondSection from "../components/AboutFirstSection/AboutSecondSection";
import AboutThirdSection from "../components/AboutFirstSection/AboutThirdSection";

const About = () => {
  return (
    <Fragment>
      <AboutFirstSection />
      <AboutSecondSection />
      <AboutThirdSection />
    </Fragment>
  );
};

export default About;
