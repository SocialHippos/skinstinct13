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
      <div className="page-wraper  ">
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr bg-pt"
            style={{ backgroundColor: "#F7B289" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-skinstinct-brown">Treatments</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Treatments</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Treatment />
          </div>
        </div>
      </div>
    </>
  );
}
