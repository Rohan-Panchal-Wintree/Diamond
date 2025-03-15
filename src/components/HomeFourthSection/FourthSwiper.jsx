import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/HeroSection/HeroSwiper.css";
import LinkArrowButton from "../LinkArrowButton";

const products = [
  {
    image: "/assets/HomeCardsSwiper/Sustainability.svg",
    title: "Sustainability and Eco-Friendliness",
    description:
      "Lab-grown diamonds reduce environmental impact and promote sustainability.",
  },
  {
    image: "/assets/HomeCardsSwiper/Quality.svg",
    title: "High Quality and Precision",
    description:
      "Crafted with precision, lab-grown diamonds offer brilliance and fewer imperfections.",
  },
  {
    image: "/assets/HomeCardsSwiper/Ethical.svg",
    title: "Ethical and Conflict-Free",
    description:
      "Lab-grown diamonds are conflict-free and ethically made without mining.",
  },
];

const FourthSwiper = () => {
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
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex items-center mb-4">
                <h4 className="text-3xl capitalize tablet:text-2xl mobile:text-xl mobile:w-9/12">
                  {product.title}
                </h4>
                <div>
                  <LinkArrowButton />
                </div>
              </div>
              <div className="p-4 pl-0 pb-10 mt-6">
                <div className="w-6">
                  <img src={product.image} alt="plus" />
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
