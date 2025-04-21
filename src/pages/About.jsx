import React, { Fragment } from "react";
import AboutFirstSection from "../components/AboutFirstSection/AboutFirstSection";
import AboutSecondSection from "../components/AboutFirstSection/AboutSecondSection";
import AboutThirdSection from "../components/AboutFirstSection/AboutThirdSection";
import MarqueeText from "../components/MarqueeText";

const About = () => {
  return (
    <Fragment>
      <AboutFirstSection />
      <AboutSecondSection />
      <MarqueeText text="Forever Captivating" speed={30} fontSize="text-8xl" />
      <AboutThirdSection />
    </Fragment>
  );
};

export default About;
