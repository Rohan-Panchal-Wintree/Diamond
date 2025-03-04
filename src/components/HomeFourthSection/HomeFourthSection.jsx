import React from "react";
import Divider from "../Divider";
import UnderlineButton from "../UnderlineButton";
import FourthSwiper from "./FourthSwiper";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";

const HomeFourthSection = () => {
  useGSAPAnimations("animate-card", "fade", { duration: 2 });
  useGSAPAnimations("animate-card-two", "fade", { duration: 3 });
  useGSAPAnimations("word", "fade", { duration: 3 });

  return (
    <div className="flex">
      <div className="w-2/4" style={{ borderRight: "1px solid #3E241D" }}>
        <div className="p-14 py-24 animate-card">
          <span className="capitalize text-Peach-Puff">premium grade</span>
          <h4 className="capitalize text-2xl text-white pt-3">
            gold plated braceleted
          </h4>
          <UnderlineButton
            title="shop jewellery"
            className="text-white mt-12"
          />
        </div>
        <Divider borderColor="#3E241D" />
        <div className="p-14 py-24 animate-card-two">
          <h4 className="text-3xl text-white">
            Exquisite{" "}
            <span className="gilda italic text-Peach-Puff">Jewellery</span> for{" "}
            <br /> extraodinary you
          </h4>
          <p className="text-white mt-9">
            Solid gold jewellery is known for its <br /> durability and
            strength.
          </p>
        </div>
      </div>
      {/* side right */}
      <div className="p-4 pb-0 w-full">
        {/* side right top section */}
        <div className="pl-6 flex">
          <div className="w-2/4 ">
            <img
              className="w-1/4 py-20 "
              src="/assets/sparkle.svg"
              alt="sparkle"
            />
            <p className="text-white text-3xl">
              Hand-made Gold chain <br /> link bracelets-
            </p>
          </div>
          <div className="p-4 w-full flex items-center">
            <h4 className="gilda leading-none text-7xl text-Peach-Puff word">
              <span className="italic">Glamour</span> that <br />
              <span className="pl-20">steals the show</span>
            </h4>
          </div>
        </div>

        {/* side right bottom section */}
        <div className="flex justify-between p-4 pb-0 mt-10">
          <div className="w-2/4">
            <img src="/assets/rock-cuban.png" alt="jewellery" />
          </div>
          <div className="p-4 max-w-md">
            <FourthSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFourthSection;
