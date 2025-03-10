import React from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import useDeviceType from "../../utils/useDeviceType";

const HeroCardTwo = () => {
  useGSAPAnimations("play-btn", "rotate");
  useGSAPAnimations("model", "fade", { duration: 2 });
  useGSAPAnimations("main", "slideUp", { duration: 2 });

  const deviceType = useDeviceType();

  return (
    <div className="flex justify-between p-8 pb-0 brown-gradient w-3/5 main tablet:flex-col mobile:w-full mobile:flex-col mobile:mt-4">
      <div className="flex flex-col items-center tablet:flex-row-reverse tablet:justify-between mobile:flex-row-reverse mobile:justify-between">
        <IoIosPlayCircle className="text-7xl p-1 border rounded-full play-btn" />
        <img
          className="mt-11 pb-6 tablet:hidden mobile:hidden"
          style={{ width: "31%" }}
          src="/assets/arrow-line.svg"
          alt="arrow"
        />
        <div className="uppercase">
          <p className="text-xl pb-4 font-semibold">
            18k gold
            <br /> plated
          </p>
        </div>
      </div>

      <div className="self-end model">
        <img src="/assets/hero-section/hero-model.png" alt="model" />
      </div>
    </div>
  );
};

export default HeroCardTwo;
