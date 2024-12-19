import React from "react";
import CommonFilter from "./CommonFilter";
import Link from "next/link";

export default function Filters() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr  bg-pt"
        style={{ backgroundColor: "#febe98" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-skinstinct-brown">Gallery Filters</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Gallery Filters</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="bg-white lightgallery gallery-filters" id="lightgallery">
        <div className="section-full bg-white content-inner-2">
          <CommonFilter />
        </div>
        <div className="section-full content-inner-2 bg-black-light">
          <CommonFilter filterStyle={2} btnclassName="" />
        </div>
        <div className="section-full bg-white content-inner-2">
          <CommonFilter filterStyle={3} btnclassName="site-button-secondry" />
        </div>
        <div
          className="section-full bg-white content-inner-2 overlay-black-dark bg-img-fix"
          style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
        >
          <CommonFilter filterStyle={4} btnclassName="site-button white" />
        </div>
        <div className="section-full bg-white content-inner-2 bg-gray">
          <CommonFilter
            filterStyle={5}
            btnclassName="site-button-secondry radius-xl"
          />
        </div>
        <div
          className="section-full bg-white content-inner-2 overlay-primary-dark bg-img-fix"
          style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
        >
          <CommonFilter
            filterStyle={6}
            btnclassName="site-button white radius-xl"
          />
        </div>
        <div
          className="section-full bg-white content-inner-2 overlay-white-dark bg-gray bg-img-fix"
          style={{ backgroundImage: "url(/images/background/bg8.jpg)" }}
        >
          <CommonFilter
            filterStyle={7}
            btnclassName="site-button-secondry button-sm"
          />
        </div>
        <div className="section-full content-inner-2 bg-black-light">
          <CommonFilter
            filterStyle={8}
            btnclassName="site-button white button-sm"
          />
        </div>
        <div className="section-full bg-white content-inner-2 overlay-white-dark bg-white">
          <CommonFilter
            filterStyle={9}
            btnclassName="site-button-secondry button-sm radius-xl"
          />
        </div>
        <div
          className="section-full content-inner-2 bg-black-light overlay-primary-dark bg-img-fix"
          style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
        >
          <CommonFilter
            filterStyle={10}
            btnclassName="site-button white button-sm radius-xl"
          />
        </div>
        <div className="section-full bg-white content-inner-2">
          <CommonFilter
            filterStyle={11}
            btnclassName="site-button outline outline-2"
          />
        </div>
        <div
          className="section-full bg-white content-inner-2 overlay-black-dark bg-img-fix"
          style={{ backgroundImage: "url(/images/background/bg4.jpg)" }}
        >
          <CommonFilter
            filterStyle={12}
            btnclassName="site-button outline outline-2"
          />
        </div>
        <div className="section-full bg-white content-inner-2 bg-gray">
          <CommonFilter
            filterStyle={13}
            btnclassName="site-button outline outline-2 radius-xl"
          />
        </div>
        <div className="section-full content-inner-2 bg-black-light">
          <CommonFilter
            filterStyle={14}
            btnclassName="site-button outline outline-2 radius-xl"
          />
        </div>
        <div
          className="section-full bg-white content-inner-2 overlay-white-dark bg-gray bg-img-fix"
          style={{ backgroundImage: "url(/images/background/bg8.jpg)" }}
        >
          <CommonFilter
            filterStyle={15}
            btnclassName="site-button outline outline-2 button-sm"
          />
        </div>
        <div className="section-full content-inner-2 bg-black-light">
          <CommonFilter
            filterStyle={16}
            btnclassName="site-button outline outline-2 button-sm"
          />
        </div>
        <div className="section-full bg-white content-inner-2 overlay-white-dark bg-white">
          <CommonFilter
            filterStyle={"17"}
            btnclassName="site-button button-sm radius-xl outline outline-2"
          />
        </div>
        <div
          className="section-full content-inner-2 bg-black-light overlay-black-dark bg-img-fix"
          style={{ backgroundImage: "url(/images/background/bg5.jpg)" }}
        >
          <CommonFilter
            filterStyle={18}
            btnclassName="site-button button-sm radius-xl outline outline-2"
          />
        </div>
      </div>
    </>
  );
}
