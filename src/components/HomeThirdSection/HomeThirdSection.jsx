import React from "react";
import LinkArrowButton from "../LinkArrowButton";
import UnderlineButton from "../UnderlineButton";
import ThirdSwiper from "./ThirdSwiper";

const HomeThirdSection = () => {
  return (
    <div>
      <div className="flex justify-between p-8 mobile:flex-col">
        <h4 className="text-5xl text-Charcoal-Gray gilda tablet:text-4xl tablet:self-center mobile:text-2xl">
          New <span className="italic">diamonds</span> collections
        </h4>
        <div className="flex items-center mobile:mt-5">
          <UnderlineButton
            title="Contact us"
            className="mr-3"
            link="/contact-us"
          />
          <LinkArrowButton />
        </div>
      </div>
      <div className="pb-14">
        <ThirdSwiper />
      </div>
    </div>
  );
};

export default HomeThirdSection;
