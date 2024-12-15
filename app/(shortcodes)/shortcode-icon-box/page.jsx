import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import IconBox from "@/components/shortcodes/IconBox";
import React from "react";

export const metadata = {
  title:
    "Shortcode Icon Box | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <IconBox />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
