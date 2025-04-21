import React from "react";
import { TbCrown } from "react-icons/tb";
import Scene from "../3dModelRing/Scene";
import BgButton from "../BgButton";
import LinkArrowButton from "../LinkArrowButton";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import useDeviceType from "../../utils/useDeviceType";
import CircularText from "../CircularText";

const AboutFirstSection = () => {
  const deviceType = useDeviceType();

  useGSAPAnimations("sparkling-diamond-ring", "float", {
    duration: 1.5,
    repeat: -1,
    yoyo: true,
  });

  return (
    // <div className="flex justify-center items-center h-screen">About us</div>
    <div
      className="flex pt-4 p-2 tablet:flex-col mobile:flex-col"
      style={{
        backgroundImage: `url("assets/white-luxury-fabric.jpg")`,
        backgroundSize: `${
          deviceType === "tablet" || deviceType === "mobile"
            ? "cover"
            : "contain"
        } `,
      }}
    >
      <div className="p-6 w-[30%] tablet:flex tablet:w-full mobile:w-full">
        <div className="tablet:flex">
          <div className="flex mt-4 tablet:w-[50%]">
            <div className="tablet:w-full">
              <div className="h-72">
                <Scene />
              </div>
              <div className="-mt-40">
                <img
                  className="self-end"
                  src="assets/about-first-section-fabric.png"
                  alt="jewellery"
                />
              </div>
            </div>
            {deviceType === "mobile" ? (
              ""
            ) : (
              <div className="p-2.5 mt-44">
                <div className="bg-Medium-Gray text-white p-2 text-3xl mobile:text-xl rotate-45">
                  <TbCrown className=" -rotate-45" />
                </div>
              </div>
            )}
          </div>
          <div className="pt-5 tablet:pl-10 tablet:w-[50%]">
            <span className="capitalize text-Medium-Gray">premium grade</span>
            <h4 className="capitalize text-2xl text-Charcoal-Gray pt-0 pb-12">
              Diamonds with Integrity
            </h4>
            <h4 className="text-3xl tablet:text-4xl">
              Find best <span className="gilda italic capitalize">diamond</span>
              <br />
              for loved one's
            </h4>
            <div className="mt-4 flex items-center">
              <BgButton title="Learn more" link="/contact-us" />
              <LinkArrowButton />
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="w-[70%] flex tablet:flex-col tablet:w-full mobile:flex-col mobile:w-full">
        <div className="flex flex-col items-center p-4 pb-0 w-[65%] tablet:w-full tablet:mt-5 mobile:w-full ">
          <h4 className="text-6xl smallLaptop:text-[55px] gilda text-center z-10 text-Charcoal-Gray tablet:text-[65px] mobile:text-[30px] ">
            Sparkle endlessely with{" "}
            <span className="italic flex justify-center items-center">
              exclusive{" "}
              <span className="flex w-16 mx-2 object-contain sparkling-diamond-ring mobile:w-12">
                <img src="/assets/sparkling-diamond-ring.png" alt="ring" />
              </span>{" "}
              diamond
            </span>{" "}
            designs
          </h4>
          <div className="flex gray-gradient w-[65%] smallLaptop:w-[70%] h-full -mt-5 mb-5 tablet:w-[50%] mobile:w-[70%] mobile:-mt-0">
            <img className="-mt-10" src="/assets/About-Model.png" alt="model" />
          </div>
        </div>

        {/* Third section */}
        <div className="p-4 w-[35%] tablet:flex tablet:w-full mobile:w-full ">
          <div className="tablet:w-[50%] tablet:flex">
            {deviceType === "tablet" || deviceType === "mobile" ? (
              <div className=" flex justify-center items-center w-full mobile:py-5 mobile:pb-10">
                <div className="circular-text-wrapper">
                  <CircularText
                    topText="APG DIAMONDS •"
                    bottomText="APG DIAMONDS •"
                    radius={80}
                    fontSize={28}
                    repetitions={1}
                  />
                </div>
              </div>
            ) : (
              <img
                className="w-1/4 py-20 tablet:py-16 mobile:py-10 transform rotate-180 mx-auto tablet:w-[35%]"
                src="/assets/sparkle-curved.svg"
                alt="sparkle"
              />
            )}
          </div>
          <div className="tablet:w-[50%]">
            <p className="text-Charcoal-Gray bold capitalize text-3xl">
              unmatched beauty
            </p>
            <div className="my-4 w-[83%] smallLaptop:w-[90%] mobile:w-full">
              <img src="/assets/about-diamond-hero.png" alt="diamond" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirstSection;
