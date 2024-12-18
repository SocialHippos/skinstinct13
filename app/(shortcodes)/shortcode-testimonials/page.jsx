import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Testimonials from "@/components/shortcodes/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Shortcode Testimonials | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Testimonials />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
