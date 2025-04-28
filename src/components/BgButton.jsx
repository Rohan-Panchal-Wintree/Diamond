import React from "react";
import "../styles/BgButton.css";
import { useNavigate } from "react-router-dom";

const BgButton = ({ title, link = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(link);
      }}
      className="bg-button py-3 px-10 rounded-full text-Charcoal-Gray capitalize mobile:py-2 mobile:px-7"
      style={{ backgroundImage: "url(/assets/button-white-bg.webp)" }}
    >
      {title}
    </button>
  );
};

export default BgButton;
