"use client";
import { treatments } from "@/data/treatments";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Portfolio2() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".card-container",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);

  return (
    <div
      className="section-full content-inner-2 portfolio text-uppercase"
      id="portfolio"
    >
      
      <div className="container">
      
        <div className="clearfix" id="lightgallery">
          <ul
            id="masonry"
            ref={isotopContainer}
            className="portfolio-ic dlab-gallery-listing gallery-grid-4 lightgallery text-center"
          >
            {treatments.map((item, index) => (
              <li
              className={`${item.filter} card-container col-lg-4 col-md-6 col-sm-6 p-a0`}
              key={index}
            >
              <div className="dlab-box dlab-gallery-box">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <Link href={`/treatments/${item.slug}`} className="treatment-box-img">
                    <Image
                      src={item.imageSrc}
                      width={650}
                      height={528}
                      alt=""
                    />
                  </Link>
                  
                  <div className="dez-info">
                    <h4 className="dezTitle" style={{ textTransform: "capitalize" }}>
                      <Link href={`/treatments/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h4>
                  </div>

                </div>
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
