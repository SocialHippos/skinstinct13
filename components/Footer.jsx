"use client";

import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks } from "@/data/footerLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="site-footer">
          <div className="footer-bottom">
         
         <div className="row">
          <div className="Book-slot">
          <div className="sliding-text">
          <span>BOOK YOUR SESSION TODAY →</span>
              <span>BOOK YOUR SESSION TODAY →</span>
              <span>BOOK YOUR SESSION TODAY →</span>
              <span>BOOK YOUR SESSION TODAY →</span>
              </div>
     
        </div>
        </div>
      </div>
      <div className="footer-top"
        style={{
          backgroundColor: "#fbceb2",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row  ">





          <div className="col-md-4 col-xl-5 col-lg-4 col-sm-6 footer-col-6">
          <div className="container">
        <div className="styles.row">
          {/* Newsletter Section */}
          <div className="join">
          <h4>Join newsletter</h4>
            <input type="email" placeholder="YOUR EMAIL" className="emailInput" />
            <button className="subscribeButton">→</button>
          </div>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 footer-col-4">
              <div className="widget widget_getintuch">
                <h5 className="footer-title text-white">CONTACT</h5>
                <ul className="">
                    
                  <li>
                  <i className="ti-mobile" />
                    <a href="tel:+0417757110">0417 757 110</a>
                  </li>
                  <li>
                  <i className="ti-email" />
                    <a href="mailto:info@skinstinct.com.au">info@skinstinct.com.au</a>
                  </li>
                  <li>
                  <i className="ti-location-pin" />
                     <a href="">62 Carrington Parade Curl Curl NSW 2096</a>
                  </li>
                 
                  </ul>
              </div>
            </div>
            <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 footer-col-4">
              <div className="widget widget_getintuch">
                <h5 className="footer-titles text-white footer-about">ABOUT</h5>
                <ul>
                  <li>
                   <a href="#">HOME</a>
                  </li>
                  <li>
                  <a href="#">TREATMENT</a>
                  </li>
                  <li>
                  <a href="#">PRICING</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-3">
          <div className="container">
        <div className="row  align-items-center">
            <div className="col-md-4 col-sm-3 text-left">
              <div className="text-footer">
              <span >
                 © {" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                {" "}SKINSTINCT
                {" "}
              </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-4 text-left ">
            <div className="logo-bottom mostion logo-dark">
              <Link href="/">
                <img alt="" src="/images/skinstinct.png" width="100" height="60" />
              </Link>
            </div>
            </div>
            <div className="col-md-2 col-sm-3 text-left">
              <div className="footer-icon">
            <div style={{ display: 'flex', gap: '12px' }}>
     
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
            </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      {/* footer bottom part */}
  
    </footer>
  );
}
