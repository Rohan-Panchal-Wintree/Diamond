import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/HeroSection/HeroSwiper.css";
import useDeviceType from "../../utils/useDeviceType";

const products = [
  {
    label: "Triad",
    image: "/assets/HomeCardsSwiper/Diamond 1.webp",
    title: "Triangle Radiance",
    price: "96",
  },
  {
    label: "Eternity",
    image: "/assets/HomeCardsSwiper/Diamond 2.webp",
    title: "Celestial Circle",
    price: "96",
  },
  {
    label: "Radiance",
    image: "/assets/HomeCardsSwiper/Diamond 3.webp",
    title: "Radiant Squareg",
    price: "96",
  },
  {
    label: "Embrace",
    image: "/assets/HomeCardsSwiper/Diamond 4.webp",
    title: "Heart’s Desire",
    price: "96",
  },
  {
    label: "Eternity",
    image: "/assets/HomeCardsSwiper/Diamond 2.webp",
    title: "Celestial Circle",
    price: "96",
  },
];

const ThirdSwiper = () => {
  const deviceType = useDeviceType();

  return (
    <div className="text-Peach-Puff">
      <Swiper
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={
          deviceType === "mobile" ? 2 : deviceType === "tablet" ? 3 : 4
        }
        loop={true}
        autoplay={{
          delay: 3000, // Delay between slides (in ms)
        }}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="mb-14 bg-Light-Gray">
                <div className="p-3">
                  <span className="bg-white text-black rounded-full px-3 py-1 text-lg tablet:text-base">
                    {product.label}
                  </span>
                </div>
                <div className="flex p-3 object-contain">
                  <img src={product.image} alt="title" />
                </div>
                <div className="p-4">
                  <h4 className="capitalize text-black gilda text-2xl pb-3 tablet:text-xl mobile:text-lg">
                    {product.title}
                  </h4>
                  {/* <hr className="border-t border-Medium-Gray" />
                  <div className="flex justify-between pt-3">
                    <p className="text-xl text-black gilda">${product.price}</p>
                    <button className=" px-3 text-black border border-Medium-Gray flex items-center rounded">
                      +
                    </button>
                  </div> */}
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
