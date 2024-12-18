import React from "react";
import Hero2 from "@/components/homes/home-ux/Hero2";
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
          <Hero2 />
          <div className="content-block">
            <RightImageText />
            <Treatment />
            
          </div>
        </div>
      </div>
    </>
  );
}
