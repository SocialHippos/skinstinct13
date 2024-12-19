import Blogs5 from "@/components/blogs/Blogs5";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import React from "react";
import Link from "next/link";
export const metadata = {
  title:
    "Blog Grid 3 Sidebar | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          {" "}
          <div
            className="dlab-bnr-inr  bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-skinstinct-brown">Blog grid 3 Sidebar</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Blog grid 3 Sidebar</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <Blogs5 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
