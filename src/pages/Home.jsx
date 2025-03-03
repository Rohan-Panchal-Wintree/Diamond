import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import SecondSection from "../components/HomeSecondSection/SecondSection";
import HomeThirdSection from "../components/HomeThirdSection/HomeThirdSection";
import HomeFourthSection from "../components/HomeFourthSection/HomeFourthSection";
import HomeFifthSection from "../components/HomeFifthSection/HomeFifthSection";

const Home = () => {
  return (
    <Fragment>
      <div
        className="home"
        style={{ backgroundImage: `url("assets/brown-luxury-fabric.png")` }}
      >
        <HeroSection />
      </div>
      <div
        className="home-second-section"
        style={{
          backgroundImage: `url("assets/abstract-background-luxury-cloth-liquid-wave.png")`,
        }}
      >
        <SecondSection />
      </div>
      <div
        style={{
          backgroundImage: `url("/assets/home-third-section.png")`,
          backgroundSize: "cover",
        }}
      >
        <HomeThirdSection />
        <hr style={{ border: "1px solid #3E241D" }} />
        <HomeFourthSection />
        <hr style={{ border: "1px solid #3E241D" }} />
        <HomeFifthSection />
      </div>
    </Fragment>
  );
};

export default Home;
