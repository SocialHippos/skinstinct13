import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Animations from "@/components/shortcodes/Animations";
import React from "react";

export const metadata = {
  title:
    "Shortcode Animation Effects | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Animations />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
