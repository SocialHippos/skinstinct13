import Pricing from "@/components/Pricing";
import React from "react";

export const metadata = {
  title:
    "Pricing | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <div className="page-content bg-white">
          <Pricing />
        </div>
      </div>
    </>
  );
}
