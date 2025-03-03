import React from "react";

const BgButton = ({ title }) => {
  return (
    <button className="bg-button py-3 px-10 rounded-full text-white capitalize">
      {title}
    </button>
  );
};

export default BgButton;
