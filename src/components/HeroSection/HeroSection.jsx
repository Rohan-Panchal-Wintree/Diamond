import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import Divider from "../Divider";
import HeroSwiper from "./HeroSwiper";
import LinkArrowButton from "../LinkArrowButton";
import BgButton from "../BgButton";
import HeroCardOne from "./HeroCardOne";
import HeroCardTwo from "./HeroCardTwo";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import useDeviceType from "../../utils/useDeviceType";
import VerticalDivider from "../VerticalDivider";

const HeroSection = () => {
  // Set up state to track window size
  const deviceType = useDeviceType();

  // Applying the effects by class name
  useGSAPAnimations("animate-fade", "fade", { duration: 3 });
  useGSAPAnimations("arrow-slide", "slideDown");
  useGSAPAnimations("button-container", "slideUp");
  useGSAPAnimations("link-arrow-btn", "rotate");
  useGSAPAnimations("diamond", "float", {
    duration: 1.5,
    repeat: -1,
    yoyo: true,
  });

  return (
    <div className="flex tablet:flex-col mobile:flex-col">
      {/* <div className="flex flex-col justify-center items-center w-full pt-20 text-Peach-Puff "> */}
      <div className="flex flex-col justify-center items-center w-full pt-20 text-Charcoal-Gray">
        <div className="flex flex-col items-center">
          <HiArrowLongDown className="arrow-slide" />
          <span
            className="uppercase text-xs mb-7 mt-6 animate-fade"
            style={{
              letterSpacing: `${deviceType === "mobile" ? "2px" : "5px"}`,
            }}
          >
            exquiste cratmanship
          </span>
        </div>
        <div>
          <h1 className="text-center text-8xl animate-fade mobile:text-5xl">
            <span className="italic">Unleash</span> the
            <br />{" "}
            <span className="flex">
              shining{" "}
              <img
                className="ml-2 mobile:w-11 mobile:object-contain w-28 mt-4 mobile:mt-0 diamond"
                src="/assets/hero-section/hero-diamond.webp"
              />
              beauty
            </span>
          </h1>
          <div className="flex justify-center py-2 mt-16 button-container">
            <BgButton title="Discover More" link="/about-us" />
            <LinkArrowButton className="link-arrow-btn" />
          </div>
        </div>

        <div className="flex w-full h-full justify-center px-8 mt-20 mobile:flex-col">
          <HeroCardOne />
          <HeroCardTwo />
        </div>
      </div>

      {/* Side section */}
      <div className="flex flex-col bg-Light-Gray w-4/12 tablet:w-full tablet:flex-row mobile:w-full">
        <div className="p-8 swiper-container tablet:w-1/2 tablet:p-4 tablet:pb-0">
          <HeroSwiper />
        </div>
        {deviceType === "tablet" ? <VerticalDivider /> : <Divider />}
        <div className="flex flex-col justify-between tablet:w-1/2 grow">
          <div className="flex items-center mt-12 pl-10">
            <h4 className="text-3xl text-Charcoal-Gray capitalize">
              Curated Lab
              <br /> Grown Diamonds
            </h4>
            <div className="ml-4 ">
              <LinkArrowButton className="link-arrow-btn" />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-3/4"
              src="/assets/hero-section/diamond-mount.webp"
              alt="diamond-mount"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
