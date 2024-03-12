"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const SlidingImage = () => {
  const firstImage = useRef<any>();
  const secondImage = useRef<any>();
  let xPercent = 0;
  let direction = 1;
  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);
  const animation = () => {
    if (xPercent >= 100) xPercent = 0;
    gsap.set(firstImage.current, {
      xPercent: xPercent,
    });
    gsap.set(secondImage.current, {
      xPercent: xPercent,
    });
    xPercent += 0.03 * direction;
    requestAnimationFrame(animation);
  };
  return (
    <div className="  absolute  -bottom-10    flex w-full h-full">
      <Image
        ref={firstImage}
        src={"/cloud.webp"}
        alt="cloud"
        fill
        className="absolute left-0 top-0  z-10  object-cover"
      />
      <Image
        style={{ left: "-100%" }}
        ref={secondImage}
        src={"/cloud.webp"}
        alt="cloud"
        fill
        className="absolute left-full z-10 top-0  object-cover"
      />
    </div>
  );
};

export default SlidingImage;
