import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/HeroSection/HeroSwiper.css";

const products = [
  {
    label: "Ring",
    image: "/assets/HomeCardsSwiper/HomeCardRing.png",
    title: "crystal pear ring",
    price: "96",
  },
  {
    label: "Earring",
    image: "/assets/HomeCardsSwiper/HomeCardEarring.png",
    title: "crystal pear Earring",
    price: "96",
  },
  {
    label: "Ring",
    image: "/assets/HomeCardsSwiper/HomeCardRing.png",
    title: "crystal pear ring",
    price: "96",
  },
  {
    label: "Earring",
    image: "/assets/HomeCardsSwiper/HomeCardEarring.png",
    title: "crystal pear Earring",
    price: "96",
  },
  {
    label: "Ring",
    image: "/assets/HomeCardsSwiper/HomeCardRing.png",
    title: "crystal pear ring",
    price: "96",
  },
  {
    label: "Earring",
    image: "/assets/HomeCardsSwiper/HomeCardEarring.png",
    title: "crystal pear Earring",
    price: "96",
  },
];

const ThirdSwiper = () => {
  return (
    <div className="text-Peach-Puff">
      <Swiper
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000, // Delay between slides (in ms)
        }}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="mb-14" style={{ backgroundColor: "#F7ECDB" }}>
                <div className="p-3">
                  <span className="bg-white text-black rounded-full px-3 py-1 text-lg">
                    {product.label}
                  </span>
                </div>
                <div className="p-3 object-contain">
                  <img src={product.image} alt="title" />
                </div>
                <div className="p-4">
                  <h4 className="capitalize text-black gilda text-2xl pb-3">
                    {product.title}
                  </h4>
                  <hr />
                  <div className="flex justify-between pt-3">
                    <p className="text-xl text-black gilda">${product.price}</p>
                    <button className=" px-3 text-black border ">+</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ThirdSwiper;
