import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Pricing from "@/components/shortcodes/Pricing";
import React from "react";

export const metadata = {
  title:
    "Shortcode Pricing Table | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Pricing />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
