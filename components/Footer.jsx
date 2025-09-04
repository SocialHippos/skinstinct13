"use client";
import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks } from "@/data/footerLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="announcement-bar">
            <div className="marquee-container">
                <div className="marquee-content" >
                    <strong style={{ color: "#9b4b26"}}>Book Your Session Today →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong style={{ color: "#9b4b26"}}>Book Your Session Today →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong style={{ color: "#9b4b26"}}>Book Your Session Today →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong style={{ color: "#9b4b26"}}>Book Your Session Today →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="marquee-content" aria-hidden="true">
                    <strong style={{ color: "#9b4b26"}}>Book Your Session Today →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong style={{ color: "#9b4b26"}}>Book Your Session Today →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong style={{ color: "#9b4b26"}}>Book Your Session Today →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong style={{ color: "#9b4b26"}}>Book Your Session Today →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
      <div className="footer-top"
        style={{
          backgroundColor: "#FBCEB2",
          backgroundSize: "cover",
        }}
      >
        <div className="full-width-container">
          <div className="row  sb">
          <div className="col-md-3 col-xl-3 col-lg-3 col-sm-6 footer-col-6">
          <div className="">
        <div className="styles.row">
          {/* Newsletter Section */}
          <div className="join">
            <h4>Join newsletter</h4>
            <div className="input-group">
              <input type="email" placeholder="YOUR EMAIL" className="emailInput" />
              <button className="subscribeButton">→</button>
            </div>
          </div>
            </div>
            </div>
            </div>

            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_getintuch">
                <h5 className="footer-titles text-white  ">HOURS</h5>
                <ul>
                    <li>MON (9:30 am - 5:30 pm)</li>
                    <li>TUE (9:30 am - 6:00 pm)</li>
                    <li>WED (9:30 am - 6:00 pm)</li>
                    <li>THU (9:30 am - 7:00 pm)</li>
                    <li>FRI (9:30 am - 6:00 pm)</li>
                    <li>SAT (9:00 am - 1 pm)</li>
                    <li>SUN (Closed)</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_getintuch">
                <h5 className="footer-titles text-white  ">ABOUT</h5>
                <ul>
                  <li>
                   <Link href="#">HOME</Link>
                  </li>
                  <li>
                  <Link href="/treatments">TREATMENTS</Link>
                  </li>
                  <li>
                  <Link href="/pricing">PRICING</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_getintuch">
                <h5 className="footer-titles text-white ">CONTACT</h5>
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

          </div>
        </div>
        <div className="copyright py-3">
          <div className="full-width-container">
        <div className="row  align-items-center">
            <div className="col-lg-4  col-md-4 col-sm-4 text-left">
              <div className="text-footer">
              <span >
                 © {" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                {" "}SKINSTINCT
                {" "}
              </span>
              </div>
            </div>
            <div className="col-lg-4  col-md-4 col-sm-4 text-center ">
            <div className="logo-bottom mostion logo-dark">
              <Link href="/">
                <img alt="" src="/images/skinstinct1.png" width="100" height="60" />
              </Link>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-right">
              <div className="footer-icon">
            <div className="bottom-social-icons">
      <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </Link>
      <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>
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