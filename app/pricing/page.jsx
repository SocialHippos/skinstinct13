import Pricing from "@/components/Pricing";
import React from "react";
import Header3 from "@/components/Header3";

export const metadata = {
  title:
    "Pricing | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <Header3 />
      <div className="page-wraper  ">
        <div className="page-content bg-white">
          <Pricing />
        </div>
      </div>
    </>
  );
}
