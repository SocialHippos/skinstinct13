import Footer15 from "@/components/Footer";
import Link from "next/link";
import Footer16 from "@/components/Footer";
import Header1 from "@/components/Header";
import Shop from "@/components/shop/Shop";
import ShopFeatures from "@/components/shop/ShopFeatures";
import React from "react";
import Header22 from "@/components/Header";

export const metadata = {
  title: "Shop | Skinstinct",
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
                <h1 className="text-white">Shop Grid 4</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Shop Grid 4</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <Shop />

          <ShopFeatures />
        </div>
        <Footer16 />
      </div>
    </>
  );
}
