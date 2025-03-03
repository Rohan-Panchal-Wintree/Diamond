import React, { useEffect, useState } from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import Divider from "../Divider";
import HeroSwiper from "./HeroSwiper";
import LinkArrowButton from "../LinkArrowButton";
import BgButton from "../BgButton";
import HeroCardOne from "./HeroCardOne";
import HeroCardTwo from "./HeroCardTwo";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";

const HeroSection = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  // Trigger the animations when the component mounts
  useEffect(() => {
    setTriggerAnimation(true);
  }, []);

  // Applying the effects by class name
  useGSAPAnimations("animate-fade", "fade", { duration: 3 });
  useGSAPAnimations("arrow-slide", "slideDown");

  return (
    <div className="flex">
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
          <h1 className="text-center text-8xl animate-fade">
            <span className="italic">Unleash</span> the
            <br />{" "}
            <span className="flex">
              shining{" "}
              <img className="mx-2" src="/assets/hero-section/ring.png" />{" "}
              beauty
            </span>
          </h1>
          <div className="flex justify-center py-2 mt-16">
            <BgButton title="find a store" />
            <LinkArrowButton />
          </div>
        </div>

        <div className="flex w-full h-full justify-center px-8 mt-20">
          <HeroCardOne />
          <HeroCardTwo />
        </div>
      </div>

      {/* Side section */}
      <div className="bg-Dark-Brown w-4/12">
        <div className="p-8 swiper-container">
          <HeroSwiper />
        </div>
        <Divider />
        <div>
          <div className="flex items-center mt-12 pl-10">
            <h4 className="text-3xl text-white capitalize m">
              Handpicked
              <br /> Designer Jewellery
            </h4>
            <div className="ml-4">
              <LinkArrowButton />
            </div>
          </div>
          <div className="flex justify-center object-contain ">
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
