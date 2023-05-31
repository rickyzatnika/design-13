/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";
import { images } from "../MyImage";

const Header = () => {
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full bg-gradient-to-b from-[#050608]  to-[#050608] overflow-hidden min-h-screen flex flex-col relative items-center justify-center"
          id="header"
        >
          <div className="absolute w-full h-40 -bottom-1 bg-gradient-to-t from-stone-900 z-40"></div>
          <div className=" w-full opacity-90 bg-goyang h-full absolute top-0 -left-12 z-10">
            <img src="/img/bunga-2.png" alt="bunga" className="w-8/12" />
          </div>
          <div className="w-full h-full relative z-20 flex flex-col items-center gap-2 justify-between">
            <h1
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-stone-400/80 titles tracking-widest text-xl sm:text-xl"
            >
              The Wedding Of
            </h1>
            <div className=" w-full opacity-70 animates h-full absolute -bottom-80 -right-64 -z-10">
              <img src="/img/bunga-2.png" alt="bunga" className="w-6/12" />
            </div>

            <div className="text-center flex items-center leading-relaxed py-4">
              <h3
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-3xl md:text-4xl font-[parisienne]  px-2 font-semibold bg-gradient-to-r from-stone-500  via-[#b4b49a] to-stone-500  bg-clip-text text-transparent py-2 "
              >
                Rio
              </h3>
              <p
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="alex bg-gradient-to-r from-stone-500  via-[#b4b49a]  to-stone-500 bg-clip-text text-transparent  text-3xl "
              >
                &
              </p>
              <h4
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-3xl md:text-4xl   px-2 font-semibold bg-gradient-to-r from-stone-500  via-[#b4b49a] font-[parisienne] to-stone-500  bg-clip-text text-transparent py-2"
              >
                Nisa
              </h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex flex-col relative z-50 items-center gap-1 justify-center"
            >
              <div className="mouse"></div>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Header;
