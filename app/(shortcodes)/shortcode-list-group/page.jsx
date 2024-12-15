import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import ListGroup from "@/components/shortcodes/ListGroup";
import React from "react";

export const metadata = {
  title:
    "Shortcode List Group | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <ListGroup />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
