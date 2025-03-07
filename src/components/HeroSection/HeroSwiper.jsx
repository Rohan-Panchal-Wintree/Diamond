import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/HeroSection/HeroSwiper.css";

const slidesData = [
  {
    label: "Premium Grade",
    title: "Gold Plated Bracelet",
    image: "/assets/hero-section/ring-box.png",
  },
  {
    label: "Premium Grade",
    title: "Gold Plated Bracelet",
    image: "/assets/hero-section/ring-box.png",
  },
  {
    label: "Premium Grade",
    title: "Gold Plated Bracelet",
    image: "/assets/hero-section/ring-box.png",
  },
];

const HeroSwiper = () => {
  return (
    <div className="text-Peach-Puff ">
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
          disableOnInteraction: false, // Keep autoplay even after interaction (e.g., slide clicks)
        }}
      >
        {slidesData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <span className="text-sm">{slide.label}</span>
                <h4 className="text-2xl">{slide.title}</h4>
                <div>
                  <img src={slide.image} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <div>
            <span className="text-sm">Premium Grade</span>
            <h4 className="text-2xl">Gold Plated Ring</h4>
            <div>
              <img src="/assets/hero-section/ring-box.png" />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
