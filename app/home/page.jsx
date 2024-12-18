import React from "react";
import Hero from "@/components/homes/home-ux/Hero";
import RightImageText from "@/components/homes/home-ux/RightImageText";
import Treatment from "@/components/homes/home-ux/Treatments";
 
import BannerContent from '@/components/homes/home-ux/BannerContent'

export const metadata = {
  title: "Home | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper roboto-condensed  ">
        <div className="page-content bg-white home-slider-10">
          <Hero />
          <BannerContent/>
          <div className="content-block">
            <RightImageText />
            <Treatment />
            
          </div>
        </div>
      </div>
    </>
  );
}
