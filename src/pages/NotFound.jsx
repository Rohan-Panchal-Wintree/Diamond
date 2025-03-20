import React from "react";
import BgButton from "../components/BgButton";
import UnderlineButton from "../components/UnderlineButton";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="p-2 flex items-center text-6xl">
        <p className="mx-2">4</p>
        <span>
          {" "}
          <img src="/assets/not-found-diamond.gif" alt="gem stone" />
        </span>
        <p className="mx-2">4</p>
      </div>
      <p className="capitalize text-2xl">page not found</p>
      <div className="mt-4">
        {/* <BgButton title="go to home page" /> */}
        <UnderlineButton title="go to home page" />
      </div>
    </div>
  );
};

export default NotFound;
