import React from "react";
import AvatarGroup from "../AvatarGroup";
import UnderlineButton from "../UnderlineButton";

const HeroCardOne = () => {
  return (
    <div className="p-8 border-light w-3/5 mr-5 flex flex-col justify-evenly">
      <AvatarGroup />
      <div className="mt-10">
        <h4 className="text-white text-4xl w-4/5">
          Best <span className="italic gilda text-Peach-Puff">Jewellery</span>{" "}
          from the World's best designers.
        </h4>
      </div>
      <div className="text-white mt-10">
        <p>
          Admire the craftsmanship behind every
          <br /> piece in our showroom
        </p>
      </div>
      <div className="mt-10">
        <UnderlineButton title="learn More" />
      </div>
    </div>
  );
};

export default HeroCardOne;
