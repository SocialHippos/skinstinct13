import Footer15 from "@/components/Footer";
import Link from "next/link";
import Footer16 from "@/components/Footer";
import Header1 from "@/components/Header";
import ShopFeatures from "@/components/shop/ShopFeatures";
import ShopSidebar from "@/components/shop/ShopSidebar";
import React from "react";
import Header22 from "@/components/Header";

export const metadata = {
  title:
    "Shop Sidebar | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr  bg-pt"
            style={{ backgroundColor: "#febe98" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Shop Sidebar</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Shop Sidebar</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <ShopSidebar />

          <ShopFeatures />
        </div>
        <Footer16 />
      </div>
    </>
  );
}
