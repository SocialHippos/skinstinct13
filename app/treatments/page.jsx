import Link from "next/link";
import Treatment from "@/components/Treatments";
import React from "react";
import Header3 from "@/components/Header3";

export const metadata = {
  title:
    "Treatments | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <Header3 />
      <h2 className="title text-center-mbl text-skinstinct-brown text-left-p-13 m-t40">Treatments</h2>
      <div className="page-wraper  ">
        <div className="page-content bg-white">

            <Treatment />
    
        </div>
      </div>
    </>
  );
}
