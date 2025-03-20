import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-Light-Gray p-1 text-center">
      © copyright <a href="/">APG DIAMONDS</a> {year}
    </div>
  );
};

export default Footer;
