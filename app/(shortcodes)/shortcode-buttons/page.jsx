import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Buttons from "@/components/shortcodes/Buttons";
import React from "react";

export const metadata = {
  title:
    "Shortcode Buttons | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Buttons />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
