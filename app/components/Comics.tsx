"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { useScroll } from "../context/ScrollProvider";
import Image from "next/image";
import NarutoNinjaButton from "./NarutoNinjaButton";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Comics = () => {
  const { N, scroller, changeNImageSrc } = useScroll();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#comics",
      start: "top center",
      end: "+=1000",
      markers: true,
      scroller: scroller.current,
      onEnter: () => {
        changeNImageSrc("/A.webp");
        gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
      },

      onEnterBack: () => {
        changeNImageSrc("/A.webp");
        gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
      },
    });

   
    return () => {
      trigger.kill();
    };
  }, [changeNImageSrc, N, scroller]);

  return (
    <>
      <section data-scroll-section id="comics" className="py-[40rem] pb-[60rem] min-h-[90vh] -mt-[19rem] relative">
        <figure className="comics absolute inset-0"></figure>
        <MaxWidthWrapper>
          <div className=" flex flex-col items-start">
            <Image width={400} height={100} className="w-[55rem] absolute top-32 " alt="news" src={"/top_comics.svg"} />
            <div className="   absolute w-full h-full -translate-x-1/2 left-[60%] top-[25%]    aspect-square ml-[17rem]">
              <div className=" text-gray-50 z-[60] w-64 h-64 flex flex-col gap-3 py-3 px-6 items-center justify-center rounded-full bg-black absolute top-64  -left-40">
                <h2 className=" text-xl">Quiz</h2>
                <div className=" absolute mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="126" viewBox="0 0 58 126">
                    <path
                      id="パス_5219"
                      data-name="パス 5219"
                      d="M39-27.609a30.478,30.478,0,0,1-.716-6.941c0-8.008,2.327-14.059,10.025-24.381C57.98-71.744,61.56-81.355,61.56-94.7c0-19.932-9.846-31.322-29-31.322s-29,11.39-29,31.322v12.28H22.177V-95.948c0-8.9,3.58-12.28,9.846-12.28s9.846,3.381,9.846,12.28c0,11.924-2.506,20.11-11.278,32.568-7.7,10.856-10.2,18.153-10.2,28.119a23.175,23.175,0,0,0,1.074,7.653Zm-18.438,8.72V-.024H39.541V-18.888Z"
                      transform="translate(-3.56 126.024)"
                      fill="#fff"
                      opacity="0.15"
                    />
                  </svg>
                </div>
                <p className=" text-3xl tracking-wide text-center max-w-[10rem]">Which Volume Cover Is This ?</p>
                <NarutoNinjaButton transparent={true} text="see Answer" />
              </div>
              <Image
                width={650}
                height={650}
                src={"/comic.png"}
                alt="comic"
                className=" inset-0 absolute object-cover"
              />
            </div>
            <NarutoNinjaButton className=" absolute  left-[20%]  top-[70%] text-2xl" text="More Info ON the comics" />
          </div>
        </MaxWidthWrapper>
        <section className="  absolute -bottom-10 z-50 w-full min-h-[20vh]">
          <div className="kakashi2 w-full"></div>
        </section>
      </section>
    </>
  );
};

export default Comics;
