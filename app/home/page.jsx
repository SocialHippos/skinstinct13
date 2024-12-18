import React from "react";
import Hero3 from "@/components/homes/home-ux/Hero3";
import RightImageText from "@/components/homes/home-ux/RightImageText";
import Treatment from "@/components/homes/home-ux/Treatments";

export const metadata = {
  title: "Home | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper roboto-condensed  ">
        <div className="page-content bg-white home-slider-10">
          <Hero3 />
          <div className="content-block">
            <RightImageText />
            <Treatment />
            
          </div>
        </div>
      </div>
    </>
  );
}
