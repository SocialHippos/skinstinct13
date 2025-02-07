import RightImageText from "@/components/homes/home-ux/RightImageText";
import React from "react";
import Link from "next/link";
import Header3 from "@/components/Header3";

export const metadata = {
  title: "About Us | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
    <Header3/>
    {/* <div
        className="dlab-bnr-inr  bg-pt"
        style={{ backgroundColor: "#febe98" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-skinstinct-brown">About Us</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
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
