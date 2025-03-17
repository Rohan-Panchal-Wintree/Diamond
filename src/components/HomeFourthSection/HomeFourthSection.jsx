import React from "react";
import Divider from "../Divider";
import UnderlineButton from "../UnderlineButton";
import FourthSwiper from "./FourthSwiper";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";
import useDeviceType from "../../utils/useDeviceType";
import VerticalDivider from "../VerticalDivider";

const HomeFourthSection = () => {
  useGSAPAnimations("animate-card", "fade", { duration: 4 });
  useGSAPAnimations("animate-card-two", "fade", { duration: 4 });
  useGSAPAnimations("word", "fade", { duration: 4 });

  const deviceType = useDeviceType();

  return (
    <div className="flex tablet:flex-col mobile:flex-col">
      <div
        className="w-2/4 border-r border-Medium-Gray tablet:w-full tablet:flex tablet:border-r-0 mobile:w-full"
        style={{
          // borderRight: "1px solid #3E241D",
          // borderRight: `${deviceType !== "tablet" ? "1px solid" : ""}`,
          borderBottom: `${deviceType === "tablet" ? "1px solid #3E241D" : ""}`,
        }}
      >
        <div className="p-14 py-24 animate-card tablet:w-1/2 mobile:p-10 mobile:py-20">
          <span className="capitalize text-Medium-Gray">premium grade</span>
          <h4 className="capitalize text-2xl text-Charcoal-Gray pt-3">
            Diamonds with Integrity
          </h4>
          <UnderlineButton title="shop now" className="mt-12" />
        </div>
        {deviceType !== "tablet" && <Divider />}
        {deviceType === "tablet" && <VerticalDivider />}
        <div className="p-14 py-24 animate-card-two tablet:w-1/2 mobile:p-10 mobile:py-20">
          <h4 className="text-3xl tablet:2xl text-Charcoal-Gray">
            Exceptional{" "}
            <span className="gilda italic text-Medium-Gray">Diamonds</span> for{" "}
            <br /> your unique elegance
          </h4>
          <p className="text-Medium-Gray mt-9">
            Exquisite CVD diamonds, expertly crafted using advanced technology
            for precision, beauty, and sustainability.
            {/* Solid gold jewellery is known for its <br /> durability and
            strength. */}
          </p>
        </div>
      </div>
      {/* side right */}
      <div className="p-4 pb-0 w-full">
        {/* side right top section */}
        <div className="pl-6 flex mobile:flex-col mobile:pl-6">
          <div className="w-2/4 mobile:w-full">
            <img
              className="w-1/4 py-20 tablet:py-16 mobile:py-10 "
              src="/assets/sparkle-curved.svg"
              alt="sparkle"
            />
            <p className="text-Charcoal-Gray text-3xl tablet:text-xl mobile:text-xl mobile:pb-7">
              Ethically crafted diamonds.
            </p>
          </div>
          <div className="p-4 w-full flex items-center">
            <h4 className="gilda leading-none text-6xl text-Charcoal-Gray word tablet:text-5xl mobile:text-3xl">
              <span className="italic">Radiance </span> that <br />
              <span className="pl-20 smallLaptop:pl-14 tablet:pl-14 mobile:pl-10">
                captures attention
              </span>
            </h4>
          </div>
        </div>

        {/* side right bottom section */}
        <div className="flex justify-between p-4 pb-0 mt-10 mobile:flex-col">
          <div className="flex items-end w-2/4 grow mobile:w-full border">
            <img src="/assets/third-diamond.png" alt="jewellery" />
          </div>
          <div className="p-4 max-w-md tablet:max-w-sm my-auto mobile:mt-10 mobile:p-0">
            <FourthSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFourthSection;
