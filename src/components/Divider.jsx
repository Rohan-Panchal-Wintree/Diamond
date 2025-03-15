import React from "react";
import { TbCrown } from "react-icons/tb";
import "../styles/Divider.css";

const Divider = ({ borderColor = "" }) => {
  return (
    <div className="relative">
      <hr
        className="border-Medium-Gray"
        style={{ borderColor: `${borderColor}` }}
      />
      <div className="absolute rotate-45 text-white p-2 divider-icon">
        <TbCrown className=" -rotate-45" />
      </div>
    </div>
  );
};

export default Divider;
