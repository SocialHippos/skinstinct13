import Contact1 from "@/components/contact/Contact1";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import React from "react";

export const metadata = {
  title: "Contact 1 | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Contact1 />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
