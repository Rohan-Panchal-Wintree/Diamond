import React, { Fragment } from "react";
import BgButton from "../BgButton";
import LinkArrowButton from "../LinkArrowButton";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import { useNavigate } from "react-router-dom";

const AboutSecondSection = () => {
  useGSAPAnimations("Exquisite-Diamond", "fade");
  useGSAPAnimations("Timeless", "slideUp", { duration: 2 });
  useGSAPAnimations("AboutSecondDesc", "slideUp", { duration: 4 });

  const navigate = useNavigate();

  return (
    <Fragment>
      <div
        // className="h-screen p-8 bg-gray-100"
        className="h-screen bg-gray-100"
        style={{
          // backgroundImage: `url("assets/about-second-section-frabric-white.jpg")`,
          backgroundImage: `url("/assets/Frame 174.png")`,
          backgroundSize: "contain",
        }}
      >
        <div
          className="flex flex-col justify-center items-center h-full"
          // style={{
          //   backgroundColor: "rgba(255,255,255, 0.2)",
          // }}
        >
          <span
            className="uppercase Exquisite-Diamond"
            style={{
              letterSpacing: `5px`,
            }}
          >
            Exquisite Diamond Collection
          </span>
          <h4 className="gilda text-6xl mt-10 Timeless">
            Timeless Elegance, Perfected.
          </h4>
          <p className="w-[50%] text-center my-10 text-lg AboutSecondDesc">
            Our lab-grown diamonds combine beauty, quality, and sustainability
            in a way that feels good, inside and out. Made with the latest
            technology, they’re just as brilliant and sparkling as natural
            diamonds. Whether you're after the perfect engagement ring or a
            special piece for any occasion, our lab-grown diamonds are ethically
            sourced and offer a more eco-friendly option without compromising on
            quality.
          </p>
          <div className=" flex ">
            {/* <BgButton title="Contact us" link="/contact-us" /> */}
            {/* <LinkArrowButton /> */}
            <button
              onClick={() => navigate("/contact-us")}
              className="text-lg border border-Charcoal-Gray py-2 px-6 rounded-full hover:bg-Charcoal-Gray hover:text-white duration-500"
            >
              Contact Us
            </button>
          </div>
        </div>
        {/* <div className="bg-yellow-500 p-4">
          <div className="bg-red-400">
            <img src="" alt="image-left" />
          </div>
          <div className="bg-red-400">
            <img src="" alt="image-right" />
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default AboutSecondSection;
