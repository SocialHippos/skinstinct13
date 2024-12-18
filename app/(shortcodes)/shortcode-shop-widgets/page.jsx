import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import ShopWidget from "@/components/shortcodes/ShopWidget";
import React from "react";

export const metadata = {
  title:
    "Shortcode Shop Widget | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <ShopWidget />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
