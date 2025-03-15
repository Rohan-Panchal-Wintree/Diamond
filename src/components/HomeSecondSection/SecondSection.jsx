import React from "react";
import AvatarGroup from "../AvatarGroup";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import SecondSwiper from "./SecondSwiper";
import LinkArrowButton from "../LinkArrowButton";
import useDeviceType from "../../utils/useDeviceType";
const SecondSection = () => {
  // Animations
  useGSAPAnimations("animate-fade", "fade", { duration: 3 });
  useGSAPAnimations("unleash", "slideUp", { duration: 2 });
  useGSAPAnimations("earrings", "slideUp", { duration: 2 });
  useGSAPAnimations("arrow", "slideDown", { duration: 1 });
  useGSAPAnimations("model-image", "slight-rotate", { duration: 3 });
  useGSAPAnimations("letter", "slight-rotate", { duration: 3 });

  const deviceType = useDeviceType();

  return (
    <div className="p-10 pt-20 mobile:p-5">
      {/* <div className="p-5 pt-0 pb-0 gray-gradient flex tablet:flex-col mobile:flex-col"> */}
      <div className="p-5 pt-0 pb-0 bg-Light-Gray flex tablet:flex-col mobile:flex-col">
        <div className=" text-Charcoal-Gray w-3/6 tablet:w-full mobile:w-full">
          <div className="flex mobile:flex-col">
            <div className="flex flex-col items-center w-2/5 mobile:w-full ">
              <p className="uppercase text-xl pt-8 pl-8 w-full unleash mobile:pb-8 mobile:pl-0">
                Reveal your
                <br />
                Diamond Glow
              </p>
              <img
                className="pb-6 mt-3 mr-4 arrow mobile:hidden"
                style={{ width: "9%" }}
                src="/assets/arrow-line-gray.svg"
                alt="arrow"
              />
            </div>
            <div className="w-6/12 flex object-contain mobile:w-full">
              <img
                className=" model-image"
                src="/assets/home-diamond-2.png"
                alt="model"
              />
            </div>
          </div>
          <div
            className="pr-0 w-[90%] mobile:w-full"
            style={{ paddingTop: "4rem" }}
          >
            <div
              className="flex justify-between pb-2 mobile:flex-col border-b border-Medium-Gray"
              // style={{ borderBottom: "1px solid #822C17" }}
            >
              <h4 className="text-4xl gilda">
                New <span className="italic">Arrivals</span>
              </h4>
              <p className="uppercase text-lg mobile:pt-4">01/2025/FA</p>
            </div>
            {/* slider */}
            <SecondSwiper />
          </div>
        </div>
        {/* second section */}
        <div className="w-3/6 pl-3 tablet:w-full mobile:w-full">
          <div className="mobile:w-full">
            <h4 className="text-Charcoal-Gray gilda text-7xl pt-12 animate-fade tablet:text-8xl mobile:text-4xl mobile:pt-6">
              Dare to <span className="italic letter">dazzle</span> <br />
              <span className="flex letter">
                diffrently{" "}
                <span className="tablet:flex items-center">
                  <AvatarGroup className="ml-5 mt-3 mobile:w-10" />
                </span>
              </span>
            </h4>
            <div className="text-Medium-Gray mt-10 animate-fade mobile:w-full mobile:mt-5">
              <p className="text-xl mobile:text-sm">
                Exceptional quality diamonds, meticulously crafted
                <br /> to elevate your elegance.
              </p>
            </div>
            <div className="pb-0 pr-7 mt-14">
              <div
                className="flex flex-col w-3/5 justify-self-end mobile:w-full border border-Medium-Gray"
                // style={{ border: "1px solid #822C17" }}
              >
                <div className="flex justify-between p-5">
                  <p className="text-2xl text-Charcoal-Gray mobile:text-lg">
                    Handcrafted Diamonds
                    <br />
                    Creative Design
                  </p>
                  <div>
                    <LinkArrowButton />
                  </div>
                </div>
                <div className="w-full pt-5 earrings">
                  <img src="/assets/Diamond-two.png" alt="earrings" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
