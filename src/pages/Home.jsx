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
        style={{ backgroundImage: `url("assets/white-luxury-fabric.webp")` }}
      >
        <HeroSection />
      </div>
      <div
        className="home-second-section"
        style={{
          backgroundImage: `url("assets/white-luxury-fabric.webp")`,
        }}
      >
        <SecondSection />
      </div>
      <div
        style={{
          backgroundImage: `url("/assets/home-third-section-white.webp")`,
          backgroundSize: "cover",
        }}
      >
        <HomeThirdSection />
        <hr className="border-t border-Medium-Gray" />
        <HomeFourthSection />
        <hr className="border-t border-Medium-Gray" />
        <HomeFifthSection />
      </div>
    </Fragment>
  );
};

export default Home;
