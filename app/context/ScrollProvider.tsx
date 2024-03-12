"use client";
import React, { createContext, useRef, useState, useLayoutEffect, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "locomotive-scroll/src/locomotive-scroll.scss";
import Image from "next/image";

const ScrollContext = createContext<any>(null);

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollContainer = useRef<any>(null);
  const logo = useRef(null);
  const N = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const scrollEl = scrollContainer.current;

      const locomotiveScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        smartphone: { smooth: true },
        lerp: 0.1,
      });

      locomotiveScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value: any) {
          //@ts-ignore
          return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollEl.style.transform ? "transform" : "fixed",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: logo.current,
          scroller: scrollEl,
          start: "top top",
          end: "+=1000px",
          scrub: true,
        },
      });

      tl.to(logo.current, { scale: 0.4, transformOrigin: "top left" });

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  const changeNImageSrc = (newSrc: string) => {
    if (N.current) {
      //@ts-ignore
      (N.current?.children[0] as HTMLImageElement).srcset = newSrc;
    }
  };

  {
    return (
      <ScrollContext.Provider value={{ scroller: scrollContainer, logo, N, changeNImageSrc }}>
        {loading && (
          <div className="fixed w-full h-full bg-black/90 z-[5000] backdrop-brightness-50 inset-0">
            <Image
              width={400}
              height={400}
              className="fixed z-[40000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/photo.gif"
              alt="logo"
            />
          </div>
        )}
        <main ref={scrollContainer} className="h-auto relative">
          {children}
        </main>
      </ScrollContext.Provider>
    );
  }
};

const useScroll = () => React.useContext(ScrollContext);
export { ScrollProvider, useScroll };
