import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/HeroSection/HeroSwiper.css";
import { useGSAPAnimations } from "../../utils/useGSAPAnimation";

const slidesData = [
  {
    label: "Premium Diamonds",
    title: "Ethically Crafted Diamonds",
    image: "/assets/hero-section/diamond-box.png",
  },
  {
    label: "Timeless Brilliance",
    title: "Sustainably Created Diamonds",
    image: "/assets/hero-section/sustainably-created-diamonds.png",
  },
  {
    label: "Unmatched Quality",
    title: "Certified Lab-Grown Quality",
    image: "/assets/hero-section/certified lab-grown-quality.png",
  },
];

const HeroSwiper = () => {
  useGSAPAnimations("hero-label", "slideUp", { duration: 2 });

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
          disableOnInteraction: false, // Keep autoplay even after interaction (e.g., slide clicks)
        }}
      >
        {slidesData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <span className="text-sm hero-label ">{slide.label}</span>
                <h4 className="text-2xl gilda">{slide.title}</h4>
                <div>
                  <img src={slide.image} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
