import React from "react";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import BgButton from "../BgButton";
import LinkArrowButton from "../LinkArrowButton";
import { IoDiamondSharp } from "react-icons/io5";
import "../../styles/HomeFifthSection.css";
import useDeviceType from "../../utils/useDeviceType";

const HomeFifthSection = () => {
  useGSAPAnimations("animate-fade", "fade", { duration: 4 });
  useGSAPAnimations("sparkle", "rotate", { duration: 4 });
  useGSAPAnimations("diamond-end", "rotate", { duration: 4 });

  const deviceType = useDeviceType();

  return (
    <div className="p-4 pt-20">
      <div className="flex justify-center pb-16 animate-fade">
        <h4 className="text-Charcoal-Gray text-6xl relative gilda capitalize animate-fade mobile:text-4xl">
          infinite <span className="italic">sparkle</span>
          <img
            className="absolute -top-3 -right-6 sparkle"
            src="/assets/single-sparkle.svg"
            alt="sparkle"
          />
        </h4>
      </div>
      <div className="flex p-4 tablet:flex-col mobile:flex-col">
        <div className="w-6/12 text-Charcoal-Gray px-4 tablet:flex tablet:w-full mobile:w-full">
          <div className="tablet:self-center">
            <h4 className="relative gilda text-3xl inline capitalize">
              sapphire
              <img
                className="absolute -top-2 -right-6 w-1/5 sparkle"
                src="/assets/single-sparkle.svg"
                alt="sparkle"
              />
            </h4>
            <div className="flex capitalize pt-3 mobile:flex mobile:flex-col mobile:items-start">
              <p className="text-2xl md:text-xl">most loved jewellery</p>
              <button className="capitalize rounded-full border border-Charcoal-Gray px-3 py-1.5 ml-5 mobile:ml-0 mobile:mt-4">
                diamonds
              </button>
            </div>
          </div>
          <div
            className="mt-16 flex items-center w-9/12 py-4 tablet:w-1/2 mobile:w-full"
            style={{
              backgroundImage:
                "radial-gradient(at center, #b7b5b5 15%, transparent 70%",
            }}
          >
            <img src="/assets/ring-holder.png" alt="ring-holder" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center pb-7 tablet:pt-10 mobile:pb-0">
          <div className="flex justify-center h-full mobile:flex-col">
            <div className="gray-gradient-reverse w-2/5 relative mobile:w-full mobile:mt-5">
              <img src="/assets/woman-diamonds.png" alt="model" />
              <div
                className="w-2/4 mobile:w-full"
                style={{
                  position: `${
                    deviceType === "mobile" ? "relative" : "absolute"
                  }`,
                  top: `${deviceType === "mobile" ? "0%" : "55%"}`,
                  left: `${deviceType === "mobile" ? "0%" : "75%"}`,
                }}
              >
                <img src="/assets/diamond-with-bg.png" alt="earring-with-bg" />
              </div>
            </div>
            <div>
              <div className=" p-16 pt-24 pr-0 mobile:p-0 mobile:pb-3 mobile:pt-3">
                <p className="pb-1 text-Medium-Gray">World famous</p>
                <h4 className="text-3xl text-Charcoal-Gray capitalize mobile:text-2xl">
                  Renowned Diamonds
                </h4>
              </div>
            </div>
          </div>
          <div className="relative animate-fade">
            <h4
              className="gilda text-Charcoal-Gray text-6xl absolute mobile:text-3xl"
              style={{
                position: `${deviceType === "mobile" && "static"}`,
                top: "-48px",
              }}
            >
              We're <span className="italic">best in crafting</span>
              <br /> the exceptional diamonds.
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-16 px-7 pb-14 tablet:flex-col tablet:pt-14 mobile:flex-col mobile:px-0 mobile:mt-7">
        <div className="p-4 text-Charcoal-Gray">
          <span className="p-3 gray-gradient inline-block text-black rounded-full text-2xl gilda tablet:self-center tablet:mr-5">
            <IoDiamondSharp />
          </span>
          <p className="mt-7 w-64 tablet:text-2xl tablet:w-full tablet:max-w-xl">
            Lab-grown diamonds offer the same stunning brilliance and beauty as
            mined diamonds, with a more sustainable approach.
          </p>
        </div>
        <div className="flex items-center p-4 tablet:order-1 mobile:order-1">
          <div className="flex mt-7">
            <BgButton title="contact us" />
            <LinkArrowButton />
          </div>
        </div>
        <div className="flex items-center mt-7 p-4 text-Charcoal-Gray tablet:flex-col tablet:items-start mobile:flex-col mobile:items-start">
          <img
            className="w-14"
            src="/assets/hero-section/hero-diamond.png"
            alt="ring"
          />
          <p className="w-48 ml-3 tablet:text-2xl tablet:w-full tablet:mt-7 mobile:mt-7 mobile:ml-0">
            We focus in offering the finest quality diamonds
          </p>
        </div>
      </div>
      <div className="p-4 py-9 mx-11 mt-10 flex flex-col justify-center bg-Light-Gray text-Charcoal-Gray relative overflow-hidden mobile:mx-0 mobile:py-4 mobile:mt-0">
        <h4 className="text-8xl gilda text-center tablet:text-6xl z-20 mobile:text-3xl">
          Diamonds that reflect
        </h4>
        <br />
        <h4 className="flex justify-center text-8xl gilda text-center tablet:text-6xl mobile:text-3xl mobile:-mt-4">
          your
          <img
            className="w-40 -mt-10 mx-3 object-fit z-10 tablet:w-28 tablet:mx-2 mobile:w-10 mobile:object-contain mobile:mt-0"
            src="/assets/diamond-end.png"
            alt="pendent"
          />
          style
        </h4>
        <img
          style={{
            position: "absolute",
            left: "10%",
            top: `${deviceType === "mobile" ? "58%" : "50%"}`,
          }}
          className="mobile:w-4"
          src="/assets/single-sparkle.svg"
          alt="sparkle"
        />
        <img
          style={{
            position: "absolute",
            left: "85%",
            top: `${deviceType === "mobile" ? "65%" : "60%"}`,
          }}
          className="mobile:w-4"
          src="/assets/single-sparkle.svg"
          alt="sparkle"
        />
        <img
          className="w-3/12 bangle diamond-end absolute"
          src="/assets/diamond-stone.png"
          alt="bracelet"
        />
      </div>
    </div>
  );
};

export default HomeFifthSection;
