import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Accordions from "@/components/shortcodes/Accordions";
import React from "react";

export const metadata = {
  title:
    "Shortcode Accordions | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Accordions />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
