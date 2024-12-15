import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="section-full content-inner const-about">
      <div className="container">
        <div className="row align-items-center col-rev sb">

          <div
            className="col-lg-7 col-md-6 col-sm-12 col-12 about-pic"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <Image
                alt=""
                src="/images/about/pic11.jpg"
                width="700"
                height="700"
              />
         
          </div>
          <div
            className="col-lg-5 col-md-6 col-sm-12 col-12"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
                 <div className="content-bx1">
              <div className="section-head style2">
                <h2 className="title">
                Your Partner in Advanced Skin Rejuvenation

                </h2>
                <p>
                Skinstinct is a premium skin clinic specializing in advanced skin rejuvenation treatments, including microneedling, mesotherapy, and cutting-edge techniques like microneedling with exosomes. Led by certified dermal therapist Amanda Layton-Lovett with a passion for dermatology and transformative skin care, Skinstinct is dedicated to helping clients achieve radiant, healthy skin.   
                </p>
                
               
              </div>
              <div className="Discover-button">
              <button className="button dz-bannerbtn bg-button" type="button">DISCOVER ME</button>
              </div>
              
            </div>
         
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
}
