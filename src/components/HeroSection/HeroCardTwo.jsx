import React from "react";
import { IoIosPlayCircle } from "react-icons/io";

const HeroCardTwo = () => {
  return (
    <div className="flex justify-between p-8 pb-0 brown-gradient w-3/5">
      <div className="flex flex-col items-center">
        <IoIosPlayCircle className="text-7xl p-1 border rounded-full" />
        <img
          className="mt-11 pb-6"
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

      <div className="justify-self-end self-end ">
        <img src="/assets/hero-section/hero-model.png" alt="model" />
      </div>
    </div>
  );
};

export default HeroCardTwo;
