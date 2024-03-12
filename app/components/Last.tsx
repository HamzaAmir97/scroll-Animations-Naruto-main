"use client";

import React, { useEffect } from "react";
import { useScroll } from "../context/ScrollProvider";
import MaxWidthWrapper from "./MaxWidthWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const Last = () => {
  const { N, scroller, changeNImageSrc } = useScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: "#last",
      start: "top center",
      end: "+=1000",
      markers: true,
      scroller: scroller.current,
      onEnter: () => {
        changeNImageSrc("/letter_o.webp");
        gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
      },

      onEnterBack: () => {
        changeNImageSrc("/letter_o.webp");
        gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [changeNImageSrc, N, scroller]);
  return (
    <section className="relative   " data-scroll-section id="last">
      <div className=" bg-[#d8d8d8] -mt-32 relative">
        <div className=" absolute bg-[#d8d8d8] rotate-[-7deg] scale-110 w-full h-full"></div>
        <MaxWidthWrapper className=" flex items-center flex-col relative">
          <div className="relative pb-[10rem] mt-[1rem]">
            <div className="relative flex-wrap py-10 px-20 mr-5 gap-3  mb-10  flex  items-start justify-start">
              <div className=" w-96  h-32 relative">
                <Image src="/last1.jpg" className=" object-contain" fill alt="naruto" />
              </div>
              <div className=" w-96  h-32 relative">
                <Image src="/last2.png" className=" object-contain" fill alt="naruto" />
              </div>
              <div className=" w-96  h-32 relative">
                <Image src="/last3.jpg" className=" object-contain" fill alt="naruto" />
              </div>
              <div className=" w-96  h-32 relative">
                <Image src="/last4.jpg" className=" object-contain" fill alt="naruto" />
              </div>
              <div className=" w-96  h-32 relative">
                <Image src="/last5.jpg" className=" object-contain" fill alt="naruto" />
              </div>
              <div className=" w-96  h-32 relative">
                <Image src="/last6.jpg" className=" object-contain" fill alt="naruto" />
              </div>
            </div>
            <p className=" max-w-[25rem] ml-20 text-xs text-black font-sans">
              This site includes machine-translated texts. Please be aware that you might find some unusual expressions
              that are difficult to understand. Some information on this site may vary depending on your region. The
              information on this site is up to date as of the time of publication.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Last;
