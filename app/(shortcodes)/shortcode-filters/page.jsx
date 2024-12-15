import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Filters from "@/components/shortcodes/Filters";
import React from "react";

export const metadata = {
  title:
    "Shortcode Filters | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Filters />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
