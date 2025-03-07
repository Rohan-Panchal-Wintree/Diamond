import React from "react";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import BgButton from "../BgButton";
import LinkArrowButton from "../LinkArrowButton";
import "../../styles/HomeFifthSection.css";

const HomeFifthSection = () => {
  useGSAPAnimations("animate-fade", "fade", { duration: 4 });
  useGSAPAnimations("sparkle", "rotate", { duration: 4 });

  return (
    <div className="p-4 pt-20">
      <div className="flex justify-center pb-16 animate-fade">
        <h4 className="text-Peach-Puff text-6xl relative gilda capitalize animate-fadex">
          infinite <span className="italic">sparkle</span>
          <img
            className="absolute -top-3 -right-6 sparkle"
            src="/assets/single-sparkle.svg"
            alt="sparkle"
          />
        </h4>
      </div>
      <div className="flex p-4 tablet:flex-col">
        <div className="w-6/12 text-white px-4 tablet:flex tablet:w-full">
          <div className="tablet:self-center">
            <h4 className="relative gilda text-3xl inline capitalize">
              sapphire
              <img
                className="absolute -top-2 -right-6 w-1/5 sparkle"
                src="/assets/single-sparkle.svg"
                alt="sparkle"
              />
            </h4>
            <div className="flex capitalize pt-3">
              <p className="text-2xl md:text-xl">most loved jewellery</p>
              <button className="capitalize rounded-full border px-3 py-1.5 ml-5 ">
                diamonds
              </button>
            </div>
          </div>
          <div
            className="mt-16 flex items-center w-9/12 py-4 tablet:w-1/2"
            style={{
              backgroundImage:
                "radial-gradient(at center, #672D21 15%, transparent 70%",
            }}
          >
            <img src="/assets/ring-holder.png" alt="ring-holder" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center pb-7 tablet:pt-10">
          <div className="flex justify-center h-full">
            <div className="brown-gradient-reverse w-2/5 relative">
              <img src="/assets/woman-diamonds.png" alt="model" />
              <div
                className="w-2/4"
                style={{
                  position: "absolute",
                  top: "55%",
                  left: "75%",
                }}
              >
                <img src="/assets/earring-with-bg.png" alt="earring-with-bg" />
              </div>
            </div>
            <div>
              <div className="text-Peach-Puff p-16 pt-24 pr-0">
                <p className="pb-1">World famous</p>
                <h4 className="text-3xl capitalize">gold necklace</h4>
              </div>
            </div>
          </div>
          <div className="relative animate-fade">
            <h4
              className="gilda text-Peach-Puff text-6xl absolute"
              style={{ top: "-48px" }}
            >
              We're <span className="italic">best in crafting</span>
              <br /> the best jewellery
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-16 px-7 pb-14 tablet:flex-col tablet:pt-14">
        <div className="p-4 text-white ">
          <span className="py-3 px-4 brown-gradient rounded-full text-2xl gilda tablet:self-center tablet:mr-5">
            w
          </span>
          <p className="mt-7 w-64 tablet:text-2xl tablet:w-full tablet:max-w-xl">
            High quality silver oxidizes hence recommended to be cleaned with
            mild soapy water for shine
          </p>
        </div>
        <div className="flex items-center p-4 tablet:order-1">
          <div className="flex mt-7">
            <BgButton title="find a store" />
            <LinkArrowButton />
          </div>
        </div>
        <div className="flex items-center mt-7 p-4 text-white tablet:flex-col tablet:items-start">
          <img
            className="w-14"
            src="/assets/hero-section/ring.png"
            alt="ring"
          />
          <p className="w-48 ml-3 tablet:text-2xl tablet:w-full tablet:mt-7">
            We focus in offering the finest quality jewellery
          </p>
        </div>
      </div>
      <div className="p-4 py-9 mx-11 mt-10 flex flex-col justify-center brown-gradient relative overflow-hidden">
        <h4 className="text-8xl gilda text-white text-center tablet:text-6xl z-20">
          Personalised jewellery
        </h4>
        <br />
        <h4 className="flex justify-center text-8xl gilda text-white text-center tablet:text-6xl">
          designed
          <img
            className="w-48 -mt-40 -mx-3 object-fit z-10 tablet:-mx-6"
            src="/assets/pendent.png"
            alt="pendent"
          />
          for you
        </h4>
        <img
          style={{ position: "absolute", left: "10%" }}
          src="/assets/single-sparkle.svg"
          alt="sparkle"
        />
        <img
          style={{
            position: "absolute",
            left: "90%",
            top: "60%",
          }}
          src="/assets/single-sparkle.svg"
          alt="sparkle"
        />
        <img
          className="w-3/12 bangle absolute"
          src="/assets/bracelet.png"
          alt="bracelet"
        />
      </div>
    </div>
  );
};

export default HomeFifthSection;
