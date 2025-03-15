import React from "react";
import { GoArrowRight } from "react-icons/go";

const UnderlineButton = ({ title, className = "" }) => {
  return (
    <button
      className={`border-b border-Charcoal-Gray flex items-center uppercase ${className}`}
    >
      {title} <GoArrowRight className="ml-2" />
    </button>
  );
};

export default UnderlineButton;
