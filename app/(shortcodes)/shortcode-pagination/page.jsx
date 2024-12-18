import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Pagination from "@/components/shortcodes/Pagination";
import React from "react";

export const metadata = {
  title:
    "Shortcode Paginations | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Pagination />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
