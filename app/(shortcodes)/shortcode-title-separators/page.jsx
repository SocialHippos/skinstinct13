import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import TitleSeparator from "@/components/shortcodes/TitleSeparator";
import React from "react";

export const metadata = {
  title:
    "Shortcode Title Seperator | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <TitleSeparator />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
