import Footer15 from "@/components/Footer";
import Link from "next/link";
import Header1 from "@/components/Header";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import React from "react";

export const metadata = {
  title:
    "Portfolio Grid 2 | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr  bg-pt"
            style={{ backgroundColor: "#febe98" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Portfolio Grid 2 Icon</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Portfolio Grid 2 Icon</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Portfolio1 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
