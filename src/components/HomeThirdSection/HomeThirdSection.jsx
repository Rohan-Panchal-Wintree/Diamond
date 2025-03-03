import React from "react";
import LinkArrowButton from "../LinkArrowButton";
import UnderlineButton from "../UnderlineButton";
import ThirdSwiper from "./ThirdSwiper";

const HomeThirdSection = () => {
  return (
    <div>
      <div className="flex justify-between p-8">
        <h4 className="text-5xl text-Peach-Puff gilda">
          New <span className="italic">jewellery</span> collections
        </h4>
        <div className="flex items-center">
          <UnderlineButton
            title="view collection"
            className="mr-3 text-white"
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
