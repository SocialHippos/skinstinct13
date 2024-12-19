import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header3 from "@/components/Header3";

export const metadata = {
  title:
    "Mesotherapy Skin Needling | Skinstinct",
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
            style={{ backgroundColor: "#febe98" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-skinstinct-brown">Mesotherapy Skin Needling</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Treatments</li>
                    <li>Mesotherapy Skin Needling</li>
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
            Mesotherapy Skin Needling
            </h2>
            <p>
            Mesotherapy skin needling combines micro needling with the infusion of targeted nutrients, such as vitamins, amino acids, and antioxidants, directly into the skin. This treatment promotes deep hydration, brightens the complexion, and improves overall skin texture and tone.
            </p>

            <div className="col-sm-12 col-md-6 col-lg-6 p-lr0">
                        <div className="pricingtable-wrapper style1">
                          <div className="pricingtable-inner">
                            <div className="pricingtable-price">
                              <h4 className="font-weight-300 m-t10 m-b0">
                              Mesotherapy Skin Needling
                              </h4>
                              <span className="pricingtable-bx text-primary">
                                $265
                              </span>
                            </div>
                            <ul className="pricingtable-features">
                            <li>
                                <i className="fas fa-check text-primary" />
                                Face Wash
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Needling
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Cleansing
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" /> 
                                Hydra
                              </li>
                              <li>
                                <i className="fas fa-check text-primary" />
                                Treatment
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
