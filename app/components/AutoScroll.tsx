"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
const imgs = ["get (1).jpg", "get (2).jpg", "get (2).png", "get.jpg", "get (1).png"];
const AutoScroll = () => {
  const [swiper, setSwiper] = React.useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [slideConfig, setSlideConfig] = React.useState({
    isBeginning: true,
    isEnd: activeIndex === imgs.length - 1,
  });
  useEffect(() => {
    if (swiper) swiper.autoplay.start(); // Ensure autoplay starts
  }, [swiper]);
  return (
    <div className="flex flex-col h-full  relative z-40">
      <Swiper
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="w-12 h-12 bg-orange-500 rounded-full z-50  ${className} "></span>`;
          },
          clickable: true,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={0} // Adjust space between slides
        slidesPerView={1.2} // Show edges of adjacent slides
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        className="h-full w-full flex flex-col  z-40 pb-10 relative"
      >
        {imgs.map((img, i) => (
          <SwiperSlide
            className="group hover:brightness-75 duration-100  cursor-pointer transition-all  relative"
            key={i}
          >
            <div className="  w-full relative  min-h-[370px]">
              <Image src={`/${img}`} alt="img" fill className="object-cover absolute w-full h-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoScroll;
