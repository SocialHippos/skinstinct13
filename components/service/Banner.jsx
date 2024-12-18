import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <div
      className="dlab-bnr-inr  bg-pt"
      style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry">
          <h1 className="text-skinstinct-brown">Services 1</h1>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>Services 1</li>
            </ul>
          </div>
          {/* Breadcrumb row END */}
        </div>
      </div>
    </div>
  );
}
