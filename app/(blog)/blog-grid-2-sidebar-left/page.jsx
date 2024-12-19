import Blogs3 from "@/components/blogs/Blogs3";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import React from "react";
import Link from "next/link";
export const metadata = {
  title:
    "Blog Grid Sidebar Left | Skinstinct",
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
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Blog grid 2 Sidebar Left</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Blog grid 2 Sidebar Left</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <Blogs3 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}