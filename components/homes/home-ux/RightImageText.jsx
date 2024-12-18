'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";  

export default function RightImageText() {
  
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
  
    gsap.fromTo(
      leftColumnRef.current, 
      { opacity: 0, x: -100 },  
      { opacity: 1, x: 0, duration: 1.5, delay: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      rightColumnRef.current, 
      { opacity: 0, x: 100 },  
      { opacity: 1, x: 0, duration: 1.5, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="section-full const-about">
      <div className="row align-items-center col-rev sb">
      
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-12"
          ref={leftColumnRef}  
        >
          <Image
            alt="Image"
            src="/images/about/pic11.jpg"
            width="1200"
            height="1200"
            layout="responsive"
          />
        </div>

        {/* Right Column with Content */}
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-12"
          ref={rightColumnRef}  
        >
          <div className="content-bx1">
            <div className="section-head style2">
              <h2 className="title">
                Your Partner in Advanced Skin Rejuvenation
              </h2>
              <p>
                Skinstinct is a premium skin clinic specializing in advanced skin
                rejuvenation treatments, including microneedling, mesotherapy, and
                cutting-edge techniques like microneedling with exosomes. Led by
                certified dermal therapist Amanda Layton-Lovett with a passion for
                dermatology and transformative skin care, Skinstinct is dedicated to
                helping clients achieve radiant, healthy skin.
              </p>
              <button className="button dz-bannerbtn bg-button" type="button">
                DISCOVER ME
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
