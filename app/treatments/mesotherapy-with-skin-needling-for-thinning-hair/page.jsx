import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header3 from "@/components/Header3";

export const metadata = {
  title: "Mesotherapy Skin Needling (Thinning Hair) | Skinstinct",
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
                  Mesotherapy Skin Needling (Thinning Hair)
                </h2>
              </div>

              <p>
                Revitalize your hair with our innovative Mesotherapy and Skin Needling treatment. This effective, minimally invasive procedure delivers nourishing substances directly to the scalp through micro-injections, enhancing the absorption of essential vitamins and growth factors.
              </p>
              <p>
                The skin needling technique stimulates collagen production and improves blood circulation, rejuvenating the scalp and promoting the regeneration of hair follicles. Experience a noticeable increase in hair density and overall scalp health, addressing the root causes of thinning hair.
              </p>
              <p>
                Transform your look and boost your confidence with our specialized treatment designed to restore your hair's vitality.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12 half-box">
            <Image
              alt="Image"
              src="/images/skinstinct-treatment-3.webp"
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
              src="/images/treatments/mesotherapy-skin-needling.png"
              width="1200"
              height="1200"
            />
          </div>

          <div className="col-lg-6 col-12 half-box-center" style={{backgroundColor: "#fff3ec"}}>
            <div className="pricingtable-wrapper style1">
              <div className="">
                <h3 className="desktop-only font-weight-300 m-t10 m-b0 text-skinstinct-brown">
                  Benefits
                </h3>
              </div>
              <ul className="pricingtable-features">
                <li>
                  <i className="fas fa-check text-primary" />
                  Increase cell proliferation and cell regeneration
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Improved skin texture
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Improved skin tone and tightness
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Improved appearance of fine lines and wrinkles
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Improved appearance of acne and surgical scars
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Improved appearance of pigmentation
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Improved appearance of rosacea
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Improved appearance of stretch marks
                </li>
                <li>
                  <i className="fas fa-check text-primary" />
                  Reduction in pore size
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