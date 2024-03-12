"use client";

import React from "react";
import SlidingImage from "./SlidingImage";
import Naruto from "./Naruto";
import SliderCards from "./SliderCards";
import Image from "next/image";
import AutoScroll from "./AutoScroll";

const Hero = ({ refScroll }: { refScroll: React.RefObject<HTMLDivElement> }) => {
  return (
    <div data-scroll-section>
      <Naruto />
      <div className="relative sky px-10 min-h-[850px]">
        <div
          data-scroll
          data-scroll-speed="-4"
          className="overflow-hidden absolute left-0 py-3 px-10 w-full h-full -bottom-10"
        >
          <SlidingImage />
        </div>
        <Image
          data-scroll
          data-scroll-speed="-5"
          src="/mountain.webp"
          alt="cloud"
          width={1920}
          height={1080}
          className="absolute parallax left-0 bottom-20 h-full z-10 object-cover"
        />
      </div>

      <div  className="min-h-96 bg-main -mt-20 relative h-full">
        <div className="bg-main after:clip after:bg-main clip left-0 absolute w-full h-full -bottom-1 z-[35]"></div>
        <div className="flex justify-start flex-col">
          <SliderCards />
        </div>
      </div>
      <section className="py-20 overflow-hidden z-[37]  bg-main relative w-full">
        <AutoScroll />
      </section>
    </div>
  );
};

export default Hero;
