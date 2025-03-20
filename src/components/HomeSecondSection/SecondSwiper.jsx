import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/HeroSection/HeroSwiper.css";
import UnderlineButton from "../UnderlineButton";

const slideData = [
  {
    start: "Lab-grown diamonds",
    highlightText: "eco-friendly",
    end: "brilliance.",
    image: "/assets/polished-diamond.png",
  },
  {
    start: "Lab-grown diamonds",
    highlightText: "reduce environmental",
    end: "impact and avoid ethical concerns.",
    image: "/assets/polished-diamond.png",
  },
  {
    start: "They offer",
    highlightText: "high-quality alternatives",
    end: "for jewelry and industrial use.",
    image: "/assets/polished-diamond.png",
  },
];

const SecondSwiper = () => {
  return (
    <div className="text-Charcoal-Gray">
      <Swiper
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Delay between slides (in ms)
        }}
      >
        {slideData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex pb-4 mobile:flex-col">
                <div className="w-40 mobile:w-32">
                  <img
                    src="/assets/polished-diamond.png"
                    alt="polished diamond"
                  />
                </div>
                <div className="pl-4">
                  <h4 className="text-2xl mb-5 mobile:text-xl">
                    {slide.start}
                    <span className="italic gilda">
                      {" "}
                      {slide.highlightText}{" "}
                    </span>
                    {slide.end}
                  </h4>
                  <UnderlineButton title="Know more" link="/about-us" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SecondSwiper;
