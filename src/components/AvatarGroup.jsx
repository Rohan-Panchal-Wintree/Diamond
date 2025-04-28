import React from "react";
import "../styles/AvatarGroup.css";

const AvatarGroup = ({ className = "" }) => {
  return (
    <div className={`flex w-16 avatar-container ${className}`}>
      <img
        className="rounded-full -ml-1 object-cover"
        src="/assets/avatar.webp"
        alt="name"
      />
      <img
        className="rounded-full -ml-1 object-cover"
        src="/assets/avatar-2.webp"
        alt="name"
      />
    </div>
  );
};

export default AvatarGroup;
