import CommingSoon from "@/components/otherPages/CommingSoon";
import React from "react";

export const metadata = {
  title:
    "Comming Soon 2 | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <div className="comming-soon">
      <div className="page-wraper">
        <CommingSoon />
      </div>{" "}
    </div>
  );
}
