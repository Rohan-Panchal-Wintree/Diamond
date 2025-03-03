import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const LinkArrowButton = ({ className = "" }) => {
  return (
    <button
      className={`p-4 border rounded-full ml-2 text-xl text-white ${className}`}
    >
      <FiArrowUpRight />
    </button>
  );
};

export default LinkArrowButton;
