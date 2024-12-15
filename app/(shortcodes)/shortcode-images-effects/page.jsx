import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import ImageEffect from "@/components/shortcodes/ImageEffect";
import React from "react";

export const metadata = {
  title:
    "Image Effects | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <ImageEffect />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
