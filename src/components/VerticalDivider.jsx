import React from "react";
import { TbCrown } from "react-icons/tb";

const VerticalDivider = () => {
  // linear-gradient(to top, #9b4431, #853425);

  return (
    <div
      className="relative bg-Medium-Gray"
      style={{
        width: "1px",
        transformOrigin: "center",
      }}
    >
      <div
        className="absolute rotate-45 text-white p-2 flex justify-center divider-icon"
        style={{
          // backgroundImage: "linear-gradient(to top, #9b4431, #853425)",
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
