import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/HeroSection/HeroSwiper.css";
import UnderlineButton from "../UnderlineButton";

const SecondSwiper = () => {
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
          // disableOnInteraction: false, // Keep autoplay even after interaction (e.g., slide clicks)
        }}
      >
        <SwiperSlide>
          <div className="flex pb-4">
            <div className="w-40">
              <img src="/assets/Earings.png" alt="earrings" />
            </div>
            <div className="pl-4">
              <h4 className="text-2xl mb-5">
                We're crafting personalised{" "}
                <span className="italic gilda">Memories </span>
                since 1964
              </h4>
              <UnderlineButton title="view collection" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex pb-4">
            <div className="w-40">
              <img src="/assets/Earings.png" alt="earrings" />
            </div>
            <div className="pl-4">
              <h4 className="text-2xl mb-5">
                We're crafting personalised{" "}
                <span className="italic gilda">Memories </span>
                since 1964
              </h4>
              <UnderlineButton title="view collection" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex pb-4">
            <div className="w-40">
              <img src="/assets/Earings.png" alt="earrings" />
            </div>
            <div className="pl-4">
              <h4 className="text-2xl mb-5">
                We're crafting personalised{" "}
                <span className="italic gilda">Memories </span>
                since 1964
              </h4>
              <UnderlineButton title="view collection" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SecondSwiper;
