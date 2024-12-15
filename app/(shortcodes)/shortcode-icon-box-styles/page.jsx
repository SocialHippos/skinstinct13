import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import IconStyles from "@/components/shortcodes/IconStyles";
import React from "react";

export const metadata = {
  title:
    "Shortcode Icon Box Styles | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <IconStyles />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
