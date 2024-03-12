"use client";
import React, { useEffect, useRef } from "react";
import type SwiperType from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useGSAP } from "@gsap/react";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NarutoNinjaButton from "./NarutoNinjaButton";

const data = [
  {
    img: "/giphy (2).webp",
    date: new Date().toLocaleDateString(),
    desc: "Kawaki (Karma Progression) Makes His First Appearance in NARUTO X BORUTO Ultimate Ninja STORM ...",
    isfeatured: true,
  },
  {
    img: "/news1.jpg",
    date: new Date().toLocaleDateString(),
    desc: "Kawaki (Karma Progression) Makes His First Appearance in NARUTO X BORUTO Ultimate Ninja STORM ...",
  },
  {
    img: "/news2.jpg",
    date: new Date().toLocaleDateString(),
    desc: "Kawaki (Karma Progression) Makes His First Appearance in NARUTO X BORUTO Ultimate Ninja STORM ...",
    isfeatured: true,
  },
  {
    img: "/giphy (1).webp",
    date: new Date().toLocaleDateString(),
    desc: "Kawaki (Karma Progression) Makes His First Appearance in NARUTO X BORUTO Ultimate Ninja STORM ...",
    isfeatured: true,
  },
  {
    img: "/get.jpg",
    date: new Date().toLocaleDateString(),
    desc: "Kawaki (Karma Progression) Makes His First Appearance in NARUTO X BORUTO Ultimate Ninja STORM ...",
  },
  {
    img: "/get.jpg",
    date: new Date().toLocaleDateString(),
    desc: "Kawaki (Karma Progression) Makes His First Appearance in NARUTO X BORUTO Ultimate Ninja STORM ...",
  },
];
const SliderCards = () => {
  const container = useRef<any>();
  const [swiper, setSwiper] = React.useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [slideConfig, setSlideConfig] = React.useState({
    isBeginning: true,
    isEnd: activeIndex === data.length - 1,
  });
  const tl = gsap.timeline();
  useGSAP(
    () => {
      tl.from(".swiper-slide", { x: 200, opacity: 0, duration: 0.2, ease: Power2.easeInOut, stagger: 0.3 }).to(
        ".swiper-slide",
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: Power2.easeInOut,
          stagger: 0.3,
        }
      );
    },
    { scope: container, dependencies: [swiper] }
  );
  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === data.length - 1,
      });
    });
  }, [swiper]);
  const inactiveStyles = "hidden text-gray-100";
  const activeStyles =
    "border   w-12 h-12  text-center border-black hover:bg-black hover:text-gray-50 text-black transition   aspect-square  z-50 place-items-center border-2 ";
  return (
    <div className="pl-36 flex flex-col h-full parallax-end  relative z-40">
      <Image
        width={200}
        height={100}
        className=" absolute  -left-5 w-96  -top-44 ml-auto object-contain z-[36] h-full "
        alt="news"
        src={"/top_news.svg"}
      />

      <Swiper
        breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
        ref={container}

        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={20}
        slidesPerView={4}
        className="h-full w-full flex flex-col  z-40 relative"
      >
        {data.map((d, i) => (
          <SwiperSlide className="group w-full  opacity-0 mt-10 text-4xl" key={i}>
            {d.isfeatured && (
              <div className=" h-10 w-10   absolute right-10 z-50 top-1">
                <Image fill src={"pickup_en.svg"} alt="" className="w-full  h-full object-cover absolute" />
              </div>
            )}
            <div className="flex flex-col relative z-40 w-72 max-w-xl bg-white">
              <div className="  cursor-pointer overflow-hidden  w-full relative h-40">
                <Image
                  fill
                  src={d.img}
                  alt=""
                  className="w-full group-hover:scale-125  duration-200 h-full object-cover absolute"
                />
              </div>
              <div className=" group-hover:text-muted-foreground px-4 py-2 text-gray-900">
                <p className=" text-xs font-medium line-clamp-4">{d.date}</p>
                <p className=" text-sm">{d.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="  flex self-end gap-3 items-center ml-auto  
       relative mt-3  z-50   w-full justify-between   "
      >
        <NarutoNinjaButton text="SEE MORE" />
        <div className=" flex mr-10 items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slidePrev();
            }}
            className={activeStyles}
          >
            <ChevronLeft className="h-8 w-8 m-auto " />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slideNext();
            }}
            className={activeStyles}
            aria-label="next image"
          >
            <ChevronRight className="h-8 w-8 m-auto " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCards;
