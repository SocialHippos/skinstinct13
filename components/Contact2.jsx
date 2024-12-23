"use client";

import React from "react";

import Link from "next/link";

export default function Contact1() {

  return (
    <>
    <div
        className="dlab-bnr-inr  bg-pt"
        style={{ backgroundColor: "#F7B289" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-skinstinct-brown">Contact Us</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
    <div
      className="section-full content-inner contact-page-9"
      style={{
        backgroundColor: "#9b4b26",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 text-white">
            <div className="row">
              <div className="col-lg-12 col-md-12 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm text-primary">
                        <i className="ti-location-pin" />
                      </span>
                      Address
                    </h5>
                    <p>
                    62 Carrington Parade, Curl Curl NSW 2096, Australia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm text-primary">
                        <i className="ti-email" />
                      </span>
                      E-mail
                    </h5>
                    <p className="m-b0">
                      <a
                        href="mailto:info@skinstinct.com.au"
                        className="text-white"
                      >
                        info@skinstinct.com.au
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm text-primary">
                        <i className="ti-mobile" />
                      </span>
                      Phone Numbers
                    </h5>
                    <p className="m-b0">
                      <a href="tel:+61417757110" className="text-white">
                      +61 417 757 110
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 m-b30">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow bg-white fadeInUp"
              data-wow-delay="0.2s"
            >
            <div className="our-story">
              <span>Let's Connect</span>
              <h2 className="title">
                CONTACT US
                {/* <span className="text-primary">since 1955</span> */}
              </h2>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-primary" />
                      </span>
                      <input
                        name="dzName"
                        type="text"
                        required
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile text-primary" />
                      </span>
                      <input
                        name="dzOther[Phone]"
                        type="number"
                        required
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email text-primary" />
                      </span>
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="Your Email Id"
                      />
                    </div>
                  </div>
                </div>
                
                
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-agenda text-primary" />
                      </span>
                      <textarea
                        name="dzMessage"
                        rows={6}
                        className="form-control"
                        required
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="button2"
                  >
                    <span>SEND</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
