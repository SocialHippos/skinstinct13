import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import AlertBox from "@/components/shortcodes/AlertBox";
import React from "react";

export const metadata = {
  title:
    "Shortcode Alert Box | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <AlertBox />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
