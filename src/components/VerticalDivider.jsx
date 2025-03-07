import React from "react";
import { TbCrown } from "react-icons/tb";

const VerticalDivider = ({ borderColor = "#3c3839" }) => {
  // linear-gradient(to top, #9b4431, #853425);

  return (
    <div
      className="relative"
      style={{
        width: "1px",
        backgroundColor: `${borderColor}`,
        transformOrigin: "center",
      }}
    >
      <div
        className="absolute rotate-45 text-white bg-red-500 p-2 flex justify-center"
        style={{
          backgroundImage: "linear-gradient(to top, #9b4431, #853425)",
          top: "50%",
          left: "-1500%",
        }}
      >
        <TbCrown className=" -rotate-45" />
      </div>
    </div>
  );
};

export default VerticalDivider;
