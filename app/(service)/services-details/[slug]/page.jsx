import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Banner3 from "@/components/service/Banner3";
import ServiceDetails from "@/components/service/ServiceDetails";
import { allServices } from "@/data/services";

import React from "react";

export const metadata = {
  title:
    "Services Details | Skinstinct",
  description: "Skinstinct",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const serviceItem =
    allServices.filter((elm) => elm.title == slug)[0] || allServices[0];
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Banner3 />
          <div className="content-block">
            <ServiceDetails serviceItem={serviceItem} />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
