import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Sliders from "@/components/shortcodes/Sliders";
import React from "react";

export const metadata = {
  title:
    "Shortcode Caroudel Sldier | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Sliders />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
