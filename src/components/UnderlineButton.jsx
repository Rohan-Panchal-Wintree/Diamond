import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const UnderlineButton = ({ title, className = "", link = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(link);
      }}
      className={`border-b border-Charcoal-Gray flex items-center uppercase ${className} group`}
    >
      {title}{" "}
      <GoArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
    </button>
  );
};

export default UnderlineButton;
