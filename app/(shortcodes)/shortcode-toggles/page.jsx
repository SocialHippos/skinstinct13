import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Toggle from "@/components/shortcodes/Toggle";
import React from "react";

export const metadata = {
  title:
    "Shortcode Toggles | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Toggle />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
