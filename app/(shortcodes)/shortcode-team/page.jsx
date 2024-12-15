import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Team from "@/components/shortcodes/Team";
import React from "react";

export const metadata = {
  title:
    "Shortcode Team | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Team />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
