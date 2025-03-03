import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/HeroSection/HeroSwiper.css";
import LinkArrowButton from "../LinkArrowButton";

const products = [
  {
    image: "/assets/HomeCardsSwiper/HomeCardRing.png",
    title: "Explore handmade bracelets",
    description: "Will generally retain its value as a prescious metal it.",
  },
  {
    image: "/assets/HomeCardsSwiper/HomeCardRing.png",
    title: "Explore handmade bracelets",
    description: "Will generally retain its value as a prescious metal it.",
  },
  {
    image: "/assets/HomeCardsSwiper/HomeCardRing.png",
    title: "Explore handmade bracelets",
    description: "Will generally retain its value as a prescious metal it.",
  },
];

const FourthSwiper = () => {
  return (
    <div className="text-Peach-Puff">
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
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex items-center mb-4">
                <h4 className="text-3xl capitalize">{product.title}</h4>
                <div>
                  <LinkArrowButton />
                </div>
              </div>
              <div className="p-4 pl-0 pb-10 mt-6">
                <div className="w-6">
                  <img src="/assets/plus.svg" alt="plus" />
                </div>
                <p className="mt-2 max-w-xs">{product.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FourthSwiper;
