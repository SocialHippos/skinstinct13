'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
 

export default function RightImageText() {
  

  return (
    <div className="section-full const-about"
    style={{
      backgroundColor: "#f3bf9e",
    }}
    
    >
      <div className="row align-items-center sb">
      
        <div
          className="col-lg-6  col-12"
        >
          <Image
            alt="Image"
            src="/images/about-large.png"
            width="1200"
            height="1200"
          />
        </div>

        {/* Right Column with Content */}
        <div
          className="col-lg-6 col-12 about_text" 
        >
          <div className="content-bx1 col-lg-9 col-sm-12 col-12 wow fadeInRight">
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
              <Link href="/about" className="about-button" type="button">
                DISCOVER ME
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
