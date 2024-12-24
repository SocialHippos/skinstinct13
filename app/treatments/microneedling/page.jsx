import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header3 from "@/components/Header3";

export const metadata = {
  title:
    "Microneedling | Skinstinct",
  description: "Skinstinct",
};
export default function page({ params }) {

  return (
    <>
        <Header3 />
      <div className="page-wraper  ">
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr  bg-pt"
            style={{ backgroundColor: "#F7B289" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Microneedling</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Treatments</li>
                    <li>Microneedling</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
          <div className="section-full content-inner bg-white">
      <div className="container">
      <div className="row col-rev">
          <div className="col-lg-6 m-b30">
            <h2 className="text-black font-weight-400 m-b15">
              Microneedling
            </h2>
            <p>
            Microneedling is a transformative treatment that rejuvenates the skin by creating controlled micro-injuries with fine needles. This process stimulates collagen and elastin production, helping to reduce the appearance of fine lines, acne scars, and uneven skin texture, revealing smoother, firmer skin.
            </p>

            <div className="col-sm-12 col-md-6 col-lg-6 p-lr0">
                        <div className="pricingtable-wrapper style1">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <h4 className="font-weight-300 m-t10 m-b0">
                                Microneedling
                              </h4>
                              <span className="pricingtable-bx text-primary">
                                $225
                              </span>
                              / per session
                              <br/>
                              3 Session $595
                            </div>
                            <ul className="pricingtable-features">
                            <li>
                                <i className="fas fa-check text-primary" />
                                Double cleanse
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Hyaluronic peel (very mild,light peel to exfoliate)
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Microneedle
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> 
                                Microneedle
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Seal skin after treatment
                              </li>
                            </ul>
                            <div className="m-t20">
                              <Link
                                href="/contact"
                                className="site-button outline outline-3 button-md"
                              >
                                Enquire Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

          </div>

        

          <div
            className="col-lg-6 col-md-12 m-b30 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30 img-about">
              <Image
                alt=""
                src="/images/treatments/microneedlings.png"
                width="600"
                height="722"
              />

          </div>
          </div>

        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
}
