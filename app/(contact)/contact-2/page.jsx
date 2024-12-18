import Contact2 from "@/components/contact/Contact2";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import React from "react";

export const metadata = {
  title: "Contact 2 | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Contact2 />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
