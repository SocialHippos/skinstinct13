import RightImageText from "@/components/homes/home-ux/RightImageText";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
    <div
        className="dlab-bnr-inr  bg-pt"
        style={{ backgroundColor: "#febe98" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">About Us</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      <div className="page-wraper roboto-condensed  ">
        <div className="page-content bg-white home-slider-10">
          <div className="content-block">
            <RightImageText />
          </div>
        </div>
      </div>
    </>
  );
}
