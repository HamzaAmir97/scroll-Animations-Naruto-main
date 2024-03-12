"use client";

import React, { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { useScroll } from "../context/ScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import NarutoNinjaButton from "./NarutoNinjaButton";

const Social = () => {
  const kakashi = React.useRef<HTMLDivElement>(null);
  const { N, scroller, changeNImageSrc } = useScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: "#social",
      start: "top center",
      end: "+=1000",
      markers: true,
      scroller: scroller.current,
      onEnter: () => {
        changeNImageSrc("/letter_t.webp");
        gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
      },

      onEnterBack: () => {
        changeNImageSrc("/letter_t.webp");
        gsap.fromTo(N.current, { right: "-200px", opacity: 0 }, { right: "10px", opacity: 1, duration: 1 });
      },
    });

    gsap.to(kakashi.current, {
      clipPath: "polygon(0px calc(14.0625vw), 100% 0px, 100% calc(100% - 14.0625vw), 0px 100%)",
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
    <section className="relative" data-scroll-section id="social">
      <div className="bg-main relative">
        <MaxWidthWrapper className="min-h-[80vh] flex items-center flex-col relative">
          <section className="relative pb-[60rem] mt-[1rem]">
            <div className="relative flex flex-col items-start justify-start">
              <div className="flex flex-col translate-x-[-17rem] gap-3 items-start">
                <Image width={400} height={100} className="w-[55rem]" alt="news" src={"/top_sns.svg"} />
              </div>
              <div className="twitter-container absolute top-60 left-16  translate-x-[-17rem]  w-full">
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    The Uchiha Clan
                    <a href="https://twitter.com/hashtag/NARUTO?src=hash&amp;ref_src=twsrc%5Etfw">#NARUTO</a>{" "}
                    <a href="https://t.co/U6u0JqeBRr">pic.twitter.com/U6u0JqeBRr</a>
                  </p>
                  &mdash; NARUTO OFFICIAL (@NARUTO_info_en){" "}
                  <a href="https://twitter.com/NARUTO_info_en/status/1663817591113256961?ref_src=twsrc%5Etfw">
                    May 31, 2023
                  </a>
                </blockquote>{" "}
                <script async src="https://platform.twitter.com/widgets.js"></script>
              </div>

              <NarutoNinjaButton className="text-xl tracking-wide mt-4" text="Follow NARUTO_info_en" />
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
      <section className="relative min-h-[50vh]">
        <div ref={kakashi} className="rocklee w-full"></div>
      </section>
    </section>
  );
};

export default Social;
