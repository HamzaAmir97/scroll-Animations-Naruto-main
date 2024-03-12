"use client";

import React, { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { useScroll } from "../context/ScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NarutoNinjaButton from "./NarutoNinjaButton";

const Collection = () => {
  const kakashi = React.useRef<HTMLDivElement>(null);
  const { N, scroller, changeNImageSrc } = useScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: "#others",
      start: "top center",
      end: "+=1000",
      markers: true,
      scroller: scroller.current,
      onEnter: () => {
        changeNImageSrc("/letter_u.webp");
        gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
      },

      onEnterBack: () => {
        changeNImageSrc("/letter_u.webp");
        gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
      },
    });
    gsap.to(kakashi.current, {
      clipPath: "polygon(0px 0px, 100% calc(14.0625vw), 100% 100%, 0px calc(100% - 14.0625vw))",
      opacity: 1,
      duration: 8,
      scrollTrigger: {
        trigger: kakashi.current,
        start: "top 80%",
        end: "1000",
        scrub: true,
        scroller: scroller.current,
      },
      ease: "power4.inOut",
    });
    return () => {
      trigger.kill();
    };
  }, [changeNImageSrc, N, scroller]);
  return (
    <section className="relative" data-scroll-section id="others">
      <div className="collectionbg  relative">
        <MaxWidthWrapper className="min-h-[20vh] flex items-center flex-col relative">
          <section className="relative pb-[40rem] mt-[1rem]">
            <div className="relative">
              <div className="flex   flex-col gap-3 items-start">
                <Image
                  width={400}
                  height={100}
                  className="w-[55rem] translate-x-[-17rem]"
                  alt="news"
                  src={"/top_others.svg"}
                />
              </div>

              <div className=" flex w-[80%] tracking-wide lg:flex-nowrap  flex-wrap items-stretch gap-4">
                <div className="flex flex-col">
                  <div className=" mb-3 py-3 px-6 text-left text-2xl bg-black text-white ">
                    <h1>GAMES</h1>
                  </div>
                  <div className=" group flex flex-col">
                    <div className=" overflow-hidden bg-gray-200  w-full h-80 aspect-square relative">
                      <Image
                        src={"/games.jpg"}
                        className=" object-contain  group-hover:scale-110 duration-200"
                        alt="kakashi"
                        fill
                      />
                    </div>
                    <div className="min-h-64  group-hover:text-muted-foreground duration-200 bg-white text-gray-900 flex flex-col items-start p-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className=" p-2 bg-zinc-200 text-sm text-gray-900">PS4</div>
                        <div className=" p-2 bg-zinc-200 text-sm text-gray-900">PS5</div>
                        <div className=" p-2 bg-zinc-200 text-sm text-gray-900">Switch</div>
                        <div className=" p-2 bg-zinc-200 text-sm text-gray-900">Xbox one</div>
                        <div className=" p-2 bg-zinc-200 text-sm text-gray-900">Xbox Series X|S</div>
                        <div className=" p-2 bg-zinc-200 text-sm text-gray-900">Steam</div>
                      </div>
                      <p className=" text-xl font-normal">naruto-x-boruto-ultimate-ninja-storm-connections</p>
                    </div>
                    <NarutoNinjaButton className=" text-xl mt-4" text="More Info On Games" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className=" mb-3 py-3 px-6 text-left text-2xl bg-black text-white ">
                    <h1>Events</h1>
                  </div>
                  <div className=" group flex flex-col">
                    <div className=" overflow-hidden bg-gray-200 w-full h-80 aspect-square relative">
                      <Image
                        src={"/events.jpg"}
                        className=" object-contain group-hover:scale-110 duration-200 "
                        alt="kakashi"
                        fill
                      />
                    </div>
                    <div className="min-h-64  group-hover:text-muted-foreground duration-200 bg-white text-gray-900 flex flex-col items-start p-3">
                      <p className=" text-xl font-normal">Anime Tokyo Station Naruto Games and Exhibihtions </p>
                    </div>
                    <NarutoNinjaButton className=" text-xl mt-4" text="More Info On Events" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className=" mb-3 py-3 px-6 text-left text-2xl bg-black text-white ">
                    <h1>Merch</h1>
                  </div>
                  <div className=" group flex flex-col">
                    <div className=" overflow-hidden bg-gray-200   w-full h-80 aspect-square relative">
                      <Image
                        src={"/merch.jpg"}
                        className=" object-contain group-hover:scale-110 duration-200"
                        alt="kakashi"
                        fill
                      />
                    </div>
                    <div className="min-h-64  group-hover:text-muted-foreground duration-200 bg-white text-gray-900 flex flex-col items-start p-3">
                      <div className=" p-2 bg-zinc-200 text-gray-900">Toys</div>
                      <p className=" text-xl font-normal">ICHIBANKUJI NARUTO WILL OF FIRE SPUN</p>
                    </div>
                    <NarutoNinjaButton className=" text-xl mt-4" text="More Info On Merch" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
        <div className=" min-h-[30vh] relative">
          <div ref={kakashi} className=" w-full jiraya"></div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
