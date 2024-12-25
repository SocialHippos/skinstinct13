import Blog from "@/components/Blog";
import Header3 from "@/components/Header3";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blogs | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header3 />
        <div className="page-content bg-white">
          <div className="content-area">
            <Blog />
          </div>
        </div>
      </div>
    </>
  );
}
