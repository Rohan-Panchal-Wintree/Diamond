import React from "react";

const MarqueeText = ({ text, speed = 20, fontSize = "text-4xl" }) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap font-thin gilda text-Charcoal-Gray py-20 my-5 relative mobile:py-8">
      <div
        className={`marquee inline-block whitespace-nowrap will-change-transform ${fontSize} capitalize mobile:text-5xl`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Repeat to make the loop seamless */}
        <span className="mx-8">{text}</span>
        <span>•</span>
        <span className="mx-8">{text}</span>
        <span>•</span>
        <span className="mx-8">{text}</span>
        <span>•</span>
        <span className="mx-8">{text}</span>
        <span>•</span>
        <span className="mx-8">{text}</span>
      </div>
    </div>
  );
};

export default MarqueeText;
