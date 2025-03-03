import React from "react";
import AvatarGroup from "../AvatarGroup";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import SecondSwiper from "./SecondSwiper";
import LinkArrowButton from "../LinkArrowButton";

const SecondSection = () => {
  // Animations
  useGSAPAnimations("animate-fade", "fade", { duration: 3 });
  useGSAPAnimations("unleash", "slideUp", { duration: 2 });
  useGSAPAnimations("arrow", "slideDown", { duration: 1 });

  return (
    <div className="p-10 pt-20 home-second-section">
      <div className="p-5 pt-0 pb-0 brown-gradient flex">
        <div className=" text-white w-3/6">
          <div className="flex">
            <div className="flex flex-col items-center w-2/5">
              <p className="uppercase text-lg pt-8 pl-8 w-full unleash">
                unleash your own
                <br /> hidden flare
              </p>
              <img
                className="pb-6 mt-3 mr-4 arrow"
                style={{ width: "9%" }}
                src="/assets/arrow-line.svg"
                alt="arrow"
              />
            </div>
            <div className="w-6/12 flex">
              <img
                className="self-end"
                src="/assets/home-model-2.png"
                alt="model"
              />
            </div>
          </div>
          <div
            className=" p-4 pr-0"
            style={{ width: "90%", paddingTop: "4rem" }}
          >
            <div
              className="flex justify-between pb-2"
              style={{ borderBottom: "1px solid #822C17" }}
            >
              <h4 className="text-4xl gilda">
                New <span className="italic">Arrivals</span>
              </h4>
              <p className="uppercase text-lg">01/2025/FA</p>
            </div>
            {/* slider */}
            <SecondSwiper />
          </div>
        </div>
        {/* second section */}
        <div className="w-3/6 pl-3">
          <div>
            <h4 className="text-white gilda text-7xl pt-12 animate-fade">
              Dare to <span className="italic">dazzle</span> <br />
              <span className="flex">
                diffrently <AvatarGroup className="ml-5 mt-3" />
              </span>
            </h4>
            <div className="text-white mt-10 animate-fade">
              <p className="text-xl">
                Excellent quality gold jewelry that are
                <br /> strongly recommended for you.
              </p>
            </div>
            <div className="pb-0 pr-7 mt-14">
              <div
                className="flex flex-col w-3/5 justify-self-end"
                style={{ border: "1px solid #822C17" }}
              >
                <div className="flex justify-between p-5">
                  <p className="text-2xl text-white">
                    Hand made Earrings
                    <br />
                    Creative Design
                  </p>
                  <div>
                    <LinkArrowButton />
                  </div>
                </div>
                <div className="w-full pt-5">
                  <img src="/assets/Earrings-two.png" alt="earrings" />
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
