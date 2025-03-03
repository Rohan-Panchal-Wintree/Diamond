import React from "react";

const BgButton = ({ title }) => {
  return (
    <button
      className="bg-button py-3 px-10 rounded-full text-white capitalize"
      style={{ backgroundImage: "url(/assets/button-bg.jpg)" }}
    >
      {title}
    </button>
  );
};

export default BgButton;
