import React, { Fragment } from "react";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import { useNavigate } from "react-router-dom";
import useDeviceType from "../../utils/useDeviceType";

const AboutSecondSection = () => {
  const deviceType = useDeviceType();
  // console.log("device type is:", deviceType);
  const navigate = useNavigate();

  useGSAPAnimations("Exquisite-Diamond", "fade", { duration: 1 });
  useGSAPAnimations("Timeless", "slideUp", { duration: 2 });
  useGSAPAnimations("AboutSecondDesc", "slideUp", { duration: 4 });

  return (
    <Fragment>
      <div
        // className="h-screen p-8 bg-gray-100"
        className="h-screen bg-gray-100 tablet:h-[60vh] mobile:h-screen"
        style={{
          // backgroundImage: `url("assets/about-second-section-frabric-white.jpg")`,
          backgroundImage: `url("${
            deviceType === "mobile"
              ? "/assets/Frame 174-mobile.png"
              : deviceType === "tablet"
              ? "/assets/Frame 174-tablet.png"
              : "/assets/Frame 174.png"
          }")`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex flex-col justify-center items-center h-full"
          // style={{
          //   backgroundColor: "rgba(255,255,255, 0.2)",
          // }}
        >
          <span
            className="uppercase Exquisite-Diamond mobile:text-[11px]"
            style={{
              letterSpacing: `5px`,
            }}
          >
            Exquisite Diamond Collection
          </span>
          <h4 className="gilda text-6xl mt-10 Timeless tablet:text-[2.7rem] mobile:text-[1.65rem] mobile:text-center mobile:mt-5">
            Timeless Elegance, Perfected.
          </h4>
          <p className="w-[50%] text-center my-10 text-lg AboutSecondDesc tablet:w-[70%] tablet:text-sm mobile:text-sm mobile:w-[85%] mobile:my-5">
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
              className="text-lg border border-Charcoal-Gray py-2 px-6 rounded-full hover:bg-Charcoal-Gray hover:text-white duration-500 mobile:text-sm"
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
