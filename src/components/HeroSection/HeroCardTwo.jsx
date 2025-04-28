import React from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import Scene from "../3dModel/Scene";

const HeroCardTwo = () => {
  useGSAPAnimations("play-btn", "rotate");
  useGSAPAnimations("model", "fade", { duration: 2 });
  useGSAPAnimations("main", "slideUp", { duration: 2 });

  return (
    <div className="flex justify-between p-8 pb-0 gray-gradient w-3/5 main tablet:flex-col mobile:w-full mobile:flex-col mobile:mt-4">
      <div className="flex flex-col items-center tablet:flex-row-reverse tablet:justify-between mobile:flex-row-reverse mobile:justify-between">
        <IoIosPlayCircle className="text-7xl p-1 border text-Light-Gray rounded-full play-btn" />
        <img
          className="mt-11 pb-6 tablet:hidden mobile:hidden"
          style={{ width: "31%" }}
          src="/assets/arrow-line-gray.svg"
          alt="arrow"
        />
        <div className="uppercase">
          <p className="text-xl pb-4 font-semibold tablet:text-white mobile:text-white">
            Radiant Finish
          </p>
        </div>
      </div>

      <div className="flex smallLaptop:w-[80%] h-3/4 self-center tablet:w-[80%] tablet:h-[60%] mobile:h-72">
        {/* <div className="flex self-end model"> */}
        {/* <img src="/assets/hero-section/hero-model.webp" alt="model" /> */}
        <Scene />
      </div>
    </div>
  );
};

export default HeroCardTwo;
