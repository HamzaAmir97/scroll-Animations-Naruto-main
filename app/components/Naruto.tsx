"use client";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import NarutoNinjaButton from "./NarutoNinjaButton";
import "swiper/css";
import "swiper/css/pagination";
const paragraphs = [
  "I'm not going to run away, I never go back on my word! That's my nindo: my ninja way!",
  "What I have is not a dream, because I will make it a reality. I'm going to restore my clan and destroy a certain someone.",
  "you have to understand that feeling pain allows you to be kind to others.",
  "I’m the only one who can bear the burden of all the hatred in the world now. I’ll handle all of it in a positive light. I am the Seventh Hokage, Naruto Uzumaki!",
];
const Naruto = () => {
  const naruto1 = useRef<any>();
  const [currentNaruto, setCurrentNaruto] = React.useState(1);
  const tl = gsap.timeline();
  useGSAP(
    () => {
      tl.from(naruto1.current, { opacity: 0, y: 50, filter: "blur(10px)", duration: 0.5, ease: Power2.easeInOut }).to(
        naruto1.current,
        { opacity: 1, y: 0, filter: "blur(0)", duration: 0.5, ease: Power2.easeInOut }
      );
    },
    { dependencies: [currentNaruto] }
  );

  return (
    <div>
      <Image
        ref={naruto1}
        src={`/naruto${currentNaruto}.png`}
        alt="Naruto"
        width={1400}
        height={1400}
        className={`object-contain w-[45rem] ${
          currentNaruto === 1 ? "-top-[14rem] z-[36]" : currentNaruto === 2 ? " -top-20 scale-90 z-[36]" : "-top-[20rem] scale-110 z-[36]"
        }   left-1/2 cursor-pointer opacity-0 -translate-x-1/2   absolute   h-full`}
      />
      <NarutoNinjaButton
        className="absolute right-20 text-3xl top-[36%] z-50"
        onClick={() => setCurrentNaruto((c) => (c < 3 ? c + 1 : 1))}
        text="Click Me !"
      />
      {/* <p className=" absolute left-20 top-1/2  z-[35] text-2xl font-semibold text-gray-50 max-w-2xl">
        {paragraphs[currentNaruto - 1]}
      </p> */}
    </div>
  );
};

export default Naruto;
