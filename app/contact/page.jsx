import Contact from "@/components/Contact";
import React from "react";
import Header3 from "@/components/Header3";

export const metadata = {
  title: "Contact | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
    <Header3 />
      <div className="page-wraper  ">
        <div className="page-content bg-white">
          <Contact />
        </div>
      </div>
    </>
  );
}
