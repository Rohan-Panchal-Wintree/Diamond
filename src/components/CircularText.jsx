import React from "react";

const CircularText = ({
  topText = "TOP TEXT • ",
  bottomText = "BOTTOM TEXT • ",
  radius = 100,
  fontSize = 16,
  repetitions = 5,
  idTop = "topTextPath",
  idBottom = "bottomTextPath",
}) => {
  const size = (radius + fontSize) * 2;
  const center = size / 2;

  const repeatedTop = topText.repeat(repetitions).trim();
  const repeatedBottom = bottomText.repeat(repetitions).trim();

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        {/* Top arc */}
        <path
          id={idTop}
          d={`
            M ${center - radius}, ${center}
            A ${radius},${radius} 0 0,1 ${center + radius}, ${center}
          `}
          fill="none"
        />
        {/* Bottom arc (in reverse to place text correctly) */}
        <path
          id={idBottom}
          d={`
            M ${center + radius}, ${center}
            A ${radius},${radius} 0 0,1 ${center - radius}, ${center}
          `}
          fill="none"
        />
      </defs>

      {/* Top text */}
      <text fontSize={fontSize} textAnchor="middle" className="gilda">
        <textPath href={`#${idTop}`} startOffset="50%">
          {repeatedTop}
        </textPath>
      </text>

      {/* Bottom text */}
      <text fontSize={fontSize} textAnchor="middle" className="gilda">
        <textPath href={`#${idBottom}`} startOffset="50%">
          {/* <tspan
            dy={fontSize / 1.5}
            style={{
              transform: "rotate(180deg)",
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          > */}
          {repeatedBottom}
          {/* </tspan> */}
        </textPath>
      </text>
    </svg>
  );
};

export default CircularText;
