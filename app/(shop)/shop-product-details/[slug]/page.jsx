import Link from "next/link";
import Footer16 from "@/components/Footer";
import Header1 from "@/components/Header";
import ShopDetails from "@/components/shop/ShopDetails";
import ShopFeatures from "@/components/shop/ShopFeatures";
import React from "react";
import { products } from "@/data/products";
import Header22 from "@/components/Header";

export const metadata = {
  title:
    "Shop Details | Skinstinct",
  description: "Skinstinct",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const productsItem =
    products.filter((elm) => elm.title == slug)[0] || products[0];
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
                <h1 className="text-skinstinct-brown">Shop Details</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Shop Details</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <ShopDetails productsItem={productsItem} />

          <ShopFeatures />
        </div>
        <Footer16 />
      </div>
    </>
  );
}
