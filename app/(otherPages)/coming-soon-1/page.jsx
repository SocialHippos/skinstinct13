import CommingSoon1 from "@/components/otherPages/CommingSoon1";
import React from "react";

export const metadata = {
  title:
    "Comming Soon 1 | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <div className="comming-soon">
      <div className="page-wraper">
        <CommingSoon1 />
      </div>{" "}
    </div>
  );
}
