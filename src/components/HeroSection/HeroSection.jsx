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
  console.log("device type", deviceType);

  // Applying the effects by class name
  useGSAPAnimations("animate-fade", "fade", { duration: 3 });
  useGSAPAnimations("arrow-slide", "slideDown");
  useGSAPAnimations("button-container", "slideUp");
  useGSAPAnimations("link-arrow-btn", "rotate");

  return (
    <div className="flex tablet:flex-col mobile:flex-col">
      <div className="flex flex-col justify-center items-center w-full pt-20 text-Peach-Puff">
        <div className="flex flex-col items-center">
          <HiArrowLongDown className="arrow-slide" />
          <span
            className="uppercase text-xs mb-7 mt-6 animate-fade"
            style={{ letterSpacing: "5px" }}
          >
            exquiste cratmanship
          </span>
        </div>
        <div>
          <h1 className="text-center text-8xl animate-fade mobile:text-6xl">
            <span className="italic">Unleash</span> the
            <br />{" "}
            <span className="flex">
              shining{" "}
              <img
                className="ml-2 mobile:w-11 mobile:object-contain"
                src="/assets/hero-section/ring.png"
              />
              beauty
            </span>
          </h1>
          <div className="flex justify-center py-2 mt-16 button-container">
            <BgButton title="find a store" />
            <LinkArrowButton className="link-arrow-btn" />
          </div>
        </div>

        <div className="flex w-full h-full justify-center px-8 mt-20 mobile:flex-col">
          <HeroCardOne />
          <HeroCardTwo />
        </div>
      </div>

      {/* Side section */}
      <div className="flex flex-col bg-Dark-Brown w-4/12 tablet:w-full tablet:flex-row">
        <div className="p-8 swiper-container tablet:w-1/2 tablet:p-4 tablet:pb-0">
          <HeroSwiper />
        </div>
        {(deviceType !== "tablet" || deviceType === "mobile") && <Divider />}
        {deviceType === "tablet" && <VerticalDivider />}
        <div className="flex flex-col justify-between tablet:w-1/2 grow">
          <div className="flex items-center mt-12 pl-10">
            <h4 className="text-3xl text-white capitalize">
              Handpicked
              <br /> Designer Jewellery
            </h4>
            <div className="ml-4 ">
              <LinkArrowButton className="link-arrow-btn" />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-3/4"
              src="/assets/hero-section/ring-mount.png"
              alt="ring-mount"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
