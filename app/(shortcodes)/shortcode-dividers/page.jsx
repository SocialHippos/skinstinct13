import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Dividers from "@/components/shortcodes/Dividers";
import React from "react";

export const metadata = {
  title:
    "Shortcode Dividers | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Dividers />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
