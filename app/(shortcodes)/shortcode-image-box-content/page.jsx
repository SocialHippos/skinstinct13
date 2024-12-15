import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import ImageBox from "@/components/shortcodes/ImageBox";
import React from "react";

export const metadata = {
  title:
    "Image Box Content | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <ImageBox />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
