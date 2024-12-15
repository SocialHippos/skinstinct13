import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="hero-sec hero-section home-slider-14 scrollSpySection"
      id="home"
      style={{
        backgroundImage: 'url("/images/main-slider/cotton-banner.png")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 relative">
            <div className="content-wrapper full-height">
              <div className="hero-content content-center">
                <h1 className="title style4">Innovating Yarns & Fabrics</h1>
                <div className="description style1">
                Skinstinct is a pioneer in the introduction of high quality yarns and fabrics in Pakistan. Adopting the latest textile performance technology, our emphasis remains on product innovation and customer satisfaction. Our dedicated team of professionals is committed to the Suraj ideology and works in harmony across our various locations to consistently deliver our products making us a supplier of choice. 
                </div>
                {/* <Link href="/services-1">Read More</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
