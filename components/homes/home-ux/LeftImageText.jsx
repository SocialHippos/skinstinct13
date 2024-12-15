import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="section-full content-inner const-about">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30 img-ho1">
              <Image
                alt=""
                src="/images/about/lefts.png"
                width="600"
                height="722"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="content-bx1">
              {/* <div className="about-year">
                <span>26</span>
                <p>
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </p>
              </div> */}
              <div className="section-head style2">
                <h2 className="title">
                Total Quality Management (TQM)
                  <br />
                   at Suraj Textiles
                </h2>
                <p>
                Suraj Textiles focuses on Total Quality Management (TQM) to ensure the highest standards in cotton textile production. By involving all employees in continuous improvement processes, we emphasize customer satisfaction, consistent quality control, and minimizing defects across every production stage. Our practices include regular employee training, process optimization, and feedback integration, ensuring that we deliver superior textile products that meet or exceed customer expectations.
                </p>
              </div>
              {/* <Link
                href={`/portfolio-grid-2`}
                className="site-button m-r10 m-b10 btnhover20"
              >
                View Portfolio
              </Link>
              <Link
                href={`/about-1`}
                className="site-button black m-b10 btnhover20"
              >
                About Us
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
