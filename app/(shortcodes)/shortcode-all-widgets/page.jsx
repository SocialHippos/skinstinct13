import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Widget from "@/components/shortcodes/Widget";
import React from "react";

export const metadata = {
  title:
    "Shortcode All Widget | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Widget />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
