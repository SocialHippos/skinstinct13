import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Tabs from "@/components/shortcodes/Tabs";
import React from "react";

export const metadata = {
  title:
    "Shortcode Tabs | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Tabs />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
