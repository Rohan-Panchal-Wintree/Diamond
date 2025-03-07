import React from "react";
import AvatarGroup from "../AvatarGroup";
import UnderlineButton from "../UnderlineButton";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";

const HeroCardOne = () => {
  useGSAPAnimations("main", "slideUp", { duration: 2 });

  return (
    <div className="p-8 border-light w-3/5 mr-5 flex flex-col justify-evenly main mobile:w-full">
      <AvatarGroup className="avatar-group tablet:w-14" />
      <div className="mt-10 heading">
        <h4 className="text-white text-4xl w-4/5 tablet:text-3xl mobile:text-xl">
          Best <span className="italic gilda text-Peach-Puff">Jewellery</span>{" "}
          from the World's best designers.
        </h4>
      </div>
      <div className="text-white mt-10 para mobile:text-sm">
        <p>
          Admire the craftsmanship behind every
          <br /> piece in our showroom
        </p>
      </div>
      <div className="mt-10 button">
        <UnderlineButton title="learn More" />
      </div>
    </div>
  );
};

export default HeroCardOne;
