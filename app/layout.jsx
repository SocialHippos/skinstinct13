"use client";
import { useEffect, useState } from "react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-zoom.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "../public/main.css";
import "../public/custom.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";

import { usePathname } from "next/navigation";
import Context from "@/context/Context";
import ThemeChanger from "@/components/common/ThemeChanger";
import "rc-slider/assets/index.css";
import "../public/rtl.scss";
import ScrollTop from "@/components/common/ScrollTop";
import SearchPopup from "@/components/common/SearchPopup";

import Footer from "@/components/Footer";
import Header from "@/components/Header2";

export default function RootLayout({ children }) {
  const path = usePathname();
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
    let ticking = false;

    window.addEventListener("scroll", function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          var stickyHeader = document.querySelector(".sticky-header");
          if (stickyHeader) {
            const ninetyVH = window.innerHeight * 0.9;
            
            if (window.pageYOffset > ninetyVH) {
              stickyHeader.classList.add("is-fixed");
            } else {
              stickyHeader.classList.remove("is-fixed");
            }
          }
          ticking = false;
        });
    
        ticking = true;
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const links = document.querySelectorAll('a[href="#"]');

      const handleClick = (event) => {
        event.preventDefault();
      };
      if (links) {
        links.forEach((link) => {
          link.addEventListener("click", handleClick);
        });
      }
    }, 600);

    // Cleanup function to remove the event listener
    // return () => {
    //   links.forEach((link) => {
    //     link.removeEventListener("click", handleClick);
    //   });
    // };
  }, [path]);

  useEffect(() => {
    setTimeout(() => {
      const { WOW } = require("wowjs");
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        once: true,
        live: false,
        callback: function (box) {
          box.classList.add("will-animate");
          box.classList.add("animated");
        },
      });
      wow.init();
    }, 100);
  }, [path]);
  useEffect(() => {
    if (localStorage.getItem("direction")) {
      // document.documentElement.dir = JSON.parse(
      //   localStorage.getItem("direction")?.dir
      // );
      document.documentElement.dir = JSON.parse(
        localStorage.getItem("direction")
      ).dir;
    } else {
      document.documentElement.dir = "ltr";
    }
    setShowChild(true);
  });
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Playfair+Display:400,400i,700,700i,900,900i|Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/gcn0wep.css"></link>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Playfair+Display:400,400i,700,700i,900,900i|Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="bg">
        {" "}
        <div id="loading-areas"></div>
        <Context>
            <>
              <Header/>
              {children} 
              <Footer/>
              <ScrollTop />
            </>
        </Context>

      </body>
    </html>
  );
}
