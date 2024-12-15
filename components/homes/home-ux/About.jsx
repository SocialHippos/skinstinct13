"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
const images = [
  "/images/about/about-cotton.png"
];

export default function About() {
  return (
    <div className="section-full content-inner exhibition-bx">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 m-b30 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="content-bx1">
              <div className="section-head">
                <h2 className="title">About Us</h2>
                <p>
                I'm Amanda, a dedicated dermal therapist with a deep passion for all things skin. Currently expanding my expertise through a Bachelor of Applied Science, I’m driven by the science behind our body's most fascinating feature—our skin. My journey is fueled by a desire to not only understand but also share knowledge about the seven layers that keep us looking and feeling our best.
                <br/><br/>
                I believe skincare should be as enjoyable as it is effective, which is why I blend science-backed advice with a touch of humor. My approach is about making learning fun while delivering real results that make you glow inside and out.
                <br/><br/>
                <b>Amanda Layton-Lovett</b><br/>
                  Dermal Therapist & Skin Science Enthusiast
                </p>
              </div>
              <button
                href={`#`}
                className="button dz-bannerbtn bg-primary"
              >
                Contact us
              </button>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            {" "}
            <div className="relative exhibition-carousel ">
              <Swiper
                loop
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                  991: {
                    slidesPerView: 1,
                  },
                  1000: {
                    slidesPerView: 1,
                  },
                }}

                style={{ position: "static", margin: "0px" }}
                className="exhibition-carousel swiper-after-none owl-carousel owl-none m-b30 w-100 swiper-p-0"
              >
                {images.map((src, index) => (
                  <SwiperSlide className="item" key={index}>
                    <Image
                      src={src}
                      width={600}
                      height={722}
                      alt={`Gallery image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
                <div style={{ zIndex: 1 }} className="owl-dots spt5"></div>
              </Swiper>
              <div className="owl-carousel owl-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
