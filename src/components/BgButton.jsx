import React from "react";
import "../styles/BgButton.css";

const BgButton = ({ title }) => {
  return (
    <button
      className="bg-button py-3 px-10 rounded-full text-Charcoal-Gray capitalize mobile:py-0 mobile:px-7"
      style={{ backgroundImage: "url(/assets/button-white-bg.jpg)" }}
    >
      {title}
    </button>
  );
};

export default BgButton;
