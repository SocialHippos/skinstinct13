import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header3 from "@/components/Header3";

export const metadata = {
  title: "Microneedling with Electroporation | Skinstinct",
  description: "Skinstinct",
};
export default function page({ params }) {

  return (
    <>
    <Header3 />
      <div className="section-full">
        <div className="row align-items-center col-rev" style={{backgroundColor: "#9b4b26"}}>
          <div className="col-lg-6 col-12 half-box">
            <div className="widget widget_getintuch">
              <div className="our-story">
                <h2 className="title">
                  Microneedling with Electroporation
                </h2>
              </div>

              <p>
                Enhance the benefits of traditional microneedling with electroporation, a technique that uses electrical pulses to increase the skin's permeability. This allows active ingredients like hyaluronic acid or peptides to penetrate deeper into the skin for optimal hydration and rejuvenation.
              </p>

            </div>
          </div>

          <div className="col-lg-6 col-12 half-box">
            <Image
              alt="Image"
              src="/images/treatments/microneedlings-with-electroporation.png"
              width="1200"
              height="1200"
            />
          </div>
        </div>
      </div>

      <div className="section-full">
        <div className="row align-items-center" style={{backgroundColor: "#9b4b26"}}>
          <div className="col-lg-6 col-12 half-box desktop-only">
            <Image
              alt="Image"
              src="/images/treatments/microneedlings-with-electroporation.png"
              width="1200"
              height="1200"
            />
          </div>

          <div className="col-lg-6 col-12 half-box-center" style={{backgroundColor: "#fff3ec"}}>
            <div className="pricingtable-wrapper style1">
              <div className="">
                <h3 className="desktop-only font-weight-300 m-t10 m-b0 text-skinstinct-brown">
                  Microneedling with Electroporation
                </h3>
                <span className="pricingtable-bx text-skinstinct-brown">
                  $75
                </span>
                / per session
              </div>
              <ul className="pricingtable-features">
                <li>
                  <i className="fas fa-check text-primary" />
                  Double cleanse
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Hyaluronic peel
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Electroporation used instead of needles for acne skin or sensitive skin
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Mask
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Seal skin after treatment
                </li>
              </ul>
              <div className="m-t20">
                <Link
                  href="/contact"
                  className="button dz-bannerbtn bg-button treatment-button"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}