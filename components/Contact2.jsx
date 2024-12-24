"use client";

import React from "react";

import Link from "next/link";

import Image from "next/image";

export default function Contact1() {

  return (
    <>
    <div className="section-full const-about">
      <div className="row align-items-center">
          
            <div
              className="col-lg-6 col-12 half-box"
              style={{
                backgroundColor: "#9b4b26",
              }}
            >

              <div className="widget widget_getintuch">
              <div className="our-story">
              <span>Let's Connect</span>
              <h2 className="title">
                CONTACT US
                {/* <span className="text-primary">since 1955</span> */}
              </h2>
              </div>
                <ul className="">
                  <li>
                    <Link href="tel:+0417757110">0417 757 110</Link>
                  </li>
                  <li>
                    <Link href="mailto:info@skinstinct.com.au">info@skinstinct.com.au</Link>
                  </li>
                  <li>
                     <Link href="">62 Carrington Parade Curl Curl NSW 2096</Link>
                  </li>
                  </ul>
              </div>
            </div>

 
    
            {/* Right Column with Content */}
            <div
              className="col-lg-6 col-12" 
              style={{
                backgroundColor: "white"
              }}
            >
                <form
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form bg-white fadeInUp"
              data-wow-delay="0.2s"
            >


              <div className="row">
              <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
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
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
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
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                
                
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
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
                    className="button dz-bannerbtn bg-button contact-button"
                  >
                    <span>SEND</span>
                  </button>
                </div>
              </div>
            </form>

              <br />
            </div>
          </div>
        </div>
    </>
  );
}
