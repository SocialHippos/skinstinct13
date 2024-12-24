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
      <div className="section-full">
        <div className="row align-items-center col-rev" style={{backgroundColor: "#9b4b26",}}>
          <div className="col-lg-6 col-12 half-box" >
            <div className="widget widget_getintuch">
              <div className="our-story">
               <h2 className="title">
                Microneedling
              </h2>
              </div>

            <p>
            Microneedling is a transformative treatment that rejuvenates the skin by creating controlled micro-injuries with fine needles. This process stimulates collagen and elastin production, helping to reduce the appearance of fine lines, acne scars, and uneven skin texture, revealing smoother, firmer skin.
            </p>

            </div>
         </div>

         <div className="col-lg-6 col-12 half-box" >
            <Image
               alt="Image"
               src="/images/treatments/microneedlings.png"
               width="1200"
               height="1200"
             />
            </div>
          </div>
      </div>



      <div className="section-full">
        <div className="row align-items-center" style={{backgroundColor: "#9b4b26",}}>

        <div className="col-lg-6 col-12 half-box desktop-only" >
            <Image
               alt="Image"
               src="/images/treatments/microneedlings.png"
               width="1200"
               height="1200"
             />
            </div>
         

          <div className="col-lg-6 col-12 half-box-center" style={{backgroundColor: "#fff3ec",}}>
                <div className="pricingtable-wrapper style1">
                        
                            <div className="">
                              <h3 className="desktop-only font-weight-300 m-t10 m-b0 text-skinstinct-brown">
                                Microneedling
                              </h3>
                              <span className="pricingtable-bx text-skinstinct-brown">
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
