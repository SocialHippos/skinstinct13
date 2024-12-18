import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = {
  title:
    "Mesotherapy Skin Needling (Thinning Hair) | Skinstinct",
  description: "Skinstinct",
};
export default function page({ params }) {

  return (
    <>
      <div className="page-wraper  ">
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr  bg-pt"
            style={{ backgroundColor: "#febe98" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Mesotherapy (Thinning Hair)</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Treatments</li>
                    <li>Mesotherapy (Thinning Hair)</li>
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
            Mesotherapy Skin Needling (Thinning Hair)
            </h2>
            <p>
            Revitalize your hair with our innovative Mesotherapy and Skin Needling treatment. This effective, minimally invasive procedure delivers nourishing substances directly to the scalp through micro-injections, enhancing the absorption of essential vitamins and growth factors.
            </p>
<p>The skin needling technique stimulates collagen production and improves blood circulation, rejuvenating the scalp and promoting the regeneration of hair follicles. Experience a noticeable increase in hair density and overall scalp health, addressing the root causes of thinning hair.</p>
            <p>Transform your look and boost your confidence with our specialized treatment designed to restore your hair’s vitality.</p>
          

            <div className="col-sm-12 col-md-12 col-lg-12 p-lr0">
                        <div className="pricingtable-wrapper style1">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                            <h3 className="text-black font-weight-400 m-b15">
                            Benefits</h3>
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
                                className="site-button outline outline-3 button-md"
                              >
                                Enquire Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 m-b30">
                <Image 
                  alt=""
                  className="border-blk-2-20"
                  src="/images/treatments/mesotherapy-skin-needling.png"
                  width="1000"
                  height="674"
                />
              </div>
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
