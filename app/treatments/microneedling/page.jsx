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
              Microneedling can be used all over the body and is excellent for targeting anti-aging, redness, scarring, stretch marks, acne, and menopausal skin. It offers great results with minimal downtime
            </p>

            </div>
         </div>

         <div className="col-lg-6 col-12 half-box" >
            <Image
               alt="Image"
               src="/images/treatments/Microneedling1.webp"
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
               src="/images/treatments/Microneedling2.webp"
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
