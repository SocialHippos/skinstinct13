import React from "react";
import Hero3 from "@/components/homes/home-ux/Hero3";
import RightImageText from "@/components/homes/home-ux/RightImageText";
import Treatment from "@/components/homes/home-ux/Treatments";
import Header2 from "@/components/Header2";

export const metadata = {
  title: "Home | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
    <Header2/>
      <div className="page-wraper">
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
