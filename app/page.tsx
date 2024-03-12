"use client";
import Image from "next/image";
import { useContext, useRef } from "react";
import StroySection from "./components/StroySection";
import Hero from "./components/Hero";
import Comics from "./components/Comics";
import { useScroll } from "./context/ScrollProvider";
import Anime from "./components/Anime";
import Collection from "./components/Collection";
import Social from "./components/Social";
import Last from "./components/Last";

export default function Home() {
  const { logo, N } = useScroll();
  const scrollEnd = useRef(null);
  
  return (
    <section id="top" className="relative bg-main min-h-screen overflow-hidden">
      <a className=" z-[999] fixed right-10 bottom-10" href="#top">
        <Image
          alt="page_top_btn"
          src={"/page_top_btn_en.svg"}
          width={50}
          height={50}
          className=" fixed bottom-1 right-2"
        />
      </a>
      <div id="N" ref={N} className="w-64 z-50 fixed top-0 opacity-0 h-full">
        <Image src="/letter_n.webp" fill alt="naruto" className="object-contain" />
      </div>
      <div ref={logo} className="fixed top-0 left-10 lg:w-96 w-64 lg:h-96 h-64 z-[99]">
        <Image className="object-contain scale-100" fill src="/logo.webp" alt="logo" />
      </div>
      <Hero refScroll={scrollEnd} />
      <StroySection />
      <Comics />
      <Anime />
      <Collection />
      <Social />
      <Last />
      <footer data-scroll-section className=" min-h-[45vh] font-sans  bg-black text-white p-4">
        <div className="flex items-center mb-5 text-sm gap-5">
          <div className=" w-40 relative h-20">
            <Image src={"/shueisha_logo.svg"} className=" object-contain" fill alt={"logo"} />
          </div>
          <div className=" w-40 relative h-20">
            <Image src={"/bne_logo.svg"} className=" object-contain" fill alt={"logo"} />
          </div>
        </div>
        ©1999 by Masashi Kishimoto/ SHUEISHA Inc.
        <br />
        ©2016 by Masashi Kishimoto,Mikio Ikemoto/ SHUEISHA Inc.
        <br />
        ©2002 MASASHI KISHIMOTO
        <br />
        ©2002 MASASHI KISHIMOTO / 2007 SHIPPUDEN All Rights Reserved.
        <br />
        ©2002 MASASHI KISHIMOTO / 2017 BORUTO All Rights Reserved.
      </footer>
    </section>
  );
}
