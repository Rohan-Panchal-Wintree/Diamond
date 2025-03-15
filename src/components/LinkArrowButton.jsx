import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const LinkArrowButton = ({ className = "" }) => {
  return (
    <button
      className={`p-4 rounded-full ml-2 text-xl text-Charcoal-Gray ${className}`}
      style={{
        border: "1px solid rgb(44, 44, 44)",
      }}
    >
      <FiArrowUpRight />
    </button>
  );
};

export default LinkArrowButton;
