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
    title: "FLAWLESS SKIN",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttons: ["ABOUT US"],
  },
  {
    backgroundImage:
      'url("/images/banner/banner2.png") center center no-repeat',
    title: "FLAWLESS SKIN",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttons: ["ABOUT US"],
  },
];

export default function Hero() {
  return (
    <div className="hero-sec">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={2500}
        loop={true}
        navigation={{
          prevEl: ".snbph6",
          nextEl: ".snbnh6",
        }}
        className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-slider2 swiper-backface-hidden"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide slider-content"
            style={{ background: slide.backgroundImage }}
          >
            <div className="inner sliderStyle4">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link href="/about-1">
                <button className="site-button">ABOUT US</button>
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
      </Swiper>
    </div>
  );
}