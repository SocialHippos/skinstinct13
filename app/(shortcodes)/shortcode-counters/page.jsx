import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Counters from "@/components/shortcodes/Counters";
import React from "react";

export const metadata = {
  title:
    "Shortcode Counters | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Counters />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
