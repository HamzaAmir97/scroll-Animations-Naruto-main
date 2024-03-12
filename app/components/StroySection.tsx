"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import NarutoNinjaButton from "./NarutoNinjaButton";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useScroll } from "../context/ScrollProvider";

const StroySection = () => {
  const kakashi = useRef(null);
  const story = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const { N, scroller, changeNImageSrc } = useScroll();
  useEffect(() => {
    if (typeof window !== "undefined") {
      changeNImageSrc("/letter_n.webp");
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({ defaults: { ease: "none" } });
      gsap.set(N.current, { right: "-200px", opacity: 0 });
      gsap.set(kakashi.current, { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)", opacity: 0 });
      gsap.set(story.current, { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" });
      ScrollTrigger.create({
        trigger: "#story",
        start: "top center",
        end: "+=1000",
        scroller: scroller.current,
        onEnterBack: () => {
          changeNImageSrc("/letter_n.webp");
          gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
        },
        onEnter: () => {
          changeNImageSrc("/letter_n.webp");
          gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
        },
        onLeaveBack: () => {
          gsap.to(N.current, { right: "-200px", opacity: 0, duration: 1 });
        },
      });

      tl.to(kakashi.current, {
        clipPath: "polygon(0 0, 100% 0,100% 100%, 0% 100%)",
        opacity: 1,
        duration: 6,
        scrollTrigger: {
          trigger: kakashi.current,
          start: "top 100%",
          end: "1000",
          scrub: true,
          scroller: scroller.current,
        },
        ease: "power4.inOut",
      })
        .to(story.current, {
          clipPath: "polygon(0 0, 100% 0,100% 100%, 0% 100%)",
          opacity: 1,
          scrollTrigger: {
            trigger: story.current,
            start: "top 100%",
            end: "1000",
            scrub: true,
            scroller: scroller.current,
          },
        })
        .to(card1.current, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card1.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
            scroller: scroller.current,
          },
        })
        .to(card2.current, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card2.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
            scroller: scroller.current,
          },
        });
    }
  }, [scroller, changeNImageSrc, N]);

  return (
    <>
      <section className="relative" data-scroll-section id="story">
        <div className="narutobg story relative">
          <MaxWidthWrapper className="min-h-[20vh] flex items-center flex-col relative">
            <NarutoNinjaButton
              transparent
              text="About Naruto"
              padding="py-10 px-20 justify-center gap-10 self-center tracking-tighter"
              className="m-auto z-[60] min-w-[350px] flex items-center self-center text-2xl md:text-3xl lg:text-6xl"
            />
            <section className="relative pb-[40rem] mt-[1rem]">
              <div className="relative">
                <div className="flex   flex-col gap-3 items-start">
                  <Image
                    ref={story}
                    width={400}
                    height={100}
                    className="w-[55rem] translate-x-[-17rem]"
                    alt="news"
                    src={"/top_story.svg"}
                  />
                  <div
                    ref={card1}
                    className="lg:translate-x-32 opacity-0 translate-y-10 pr-32 relative max-w-xl tracking-wider py-16 px-8 bg-white"
                  >
                    <Image
                      width={400}
                      height={100}
                      className="-top-20 right-[-11rem] absolute"
                      alt="news"
                      src={"/naruto.png"}
                    />
                    <div className="flex leading-6 flex-col items-start">
                      <h1 className="text-5xl font-bold mb-2">Naruto</h1>
                      <p className="font-medium max-w-xs tracking-tight text-2xl">
                        From its debut in 1999, all the way to its stunning conclusion—look back on the trials and
                        tribulations of an outcast ninja’s coming of age and the famous scenes that shaped his story!!
                      </p>
                      <NarutoNinjaButton className="text-xl font-normal mt-4" text="More Info" />
                    </div>
                  </div>
                  <div
                    ref={card2}
                    className="lg:-translate-x-20 opacity-0 translate-y-10 max-w-xl pr-32 relative tracking-wider py-16 px-8 bg-white"
                  >
                    <Image
                      width={400}
                      height={100}
                      className="w-[20rem] top-5 right-[-11rem] absolute"
                      alt="news"
                      src={"/char_boruto.webp"}
                    />
                    <div className="flex leading-6 flex-col items-start">
                      <h1 className="flex items-center gap-2 text-5xl font-bold mb-2">
                        BORUTO
                        <p className="font-normal tracking-tight text-lg">-NARUTO NEXT GENERATIONS-</p>
                      </h1>
                      <p className="font-medium max-w-xs tracking-tight text-2xl">
                        The story of a young boy who dreams of becoming Hokage is passed on to a new generation! See how
                        the world of NARUTO has changed over the years!!
                      </p>
                      <NarutoNinjaButton className="text-xl font-normal mt-4" text="More Info" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </MaxWidthWrapper>
        </div>
        <section className=" relative min-h-[50vh]">
          <div ref={kakashi} className="  kakashi w-full"></div>
        </section>
      </section>
    </>
  );
};

export default StroySection;
