import Contact2 from "@/components/Contact2";
import React from "react";
import Header3 from "@/components/Header3";
import Map from "@/components/Map";

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
          <Contact2 />
          <Map />
        </div>
      </div>
    </>
  );
}
