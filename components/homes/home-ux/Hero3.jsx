"use client";

import Link from "next/link";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const slidesData = [
  {
    backgroundImage:
      'url("/images/banner/banner1.png") center center no-repeat',
    title1: "FLAWLESS SKIN",
    title2: "starts",
    title3: "HERE",
    description:
      "",
    buttons: ["DISCOVER MORE"],
  },
  {
    backgroundImage:
      'url("/images/banner/banner2.png") center center no-repeat',
      title1: "FLAWLESS SKIN",
      title2: "starts",
      title3: "HERE",
    description:
      "",
      buttons: ["DISCOVER MORE"],
  },
];

export default function Hero() {
  return (
    <div className="hero-sec">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{
          delay: 40000,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={2500}
        loop
        navigation={{ prevEl: ".snbph6", nextEl: ".snbnh6" }}
        className=" swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-slider2 swiper-backface-hidden"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide slider-content `}
            style={{ background: slide.backgroundImage }}
          >
            <div className="inner sliderStyle4">
              <h1>{slide.title1}</h1>
              <h1><span style={{ fontStyle: 'italic' }}>{slide.title2}</span>&nbsp;{slide.title3}</h1>
              {/* <p>{slide.description}</p> */}
              <Link href={"/treatments"}>
                <button className="button dz-bannerbtn bg-button mt-20">DISCOVER MORE</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button" style={{ zIndex: 1 }}>
          <div className="swiper-button-prev snbph6 previousButton swiper-button-disabled">
            <i className="las la-angle-left" />
          </div>
          <div className="swiper-button-next snbnh6 nextButton">
            <i className="las la-angle-right" />
          </div>
        </div>
      </Swiper>{" "}
    </div>
  );
}