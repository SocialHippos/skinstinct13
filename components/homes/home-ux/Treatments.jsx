"use client";
import { portfolioItems3 } from "@/data/projects";
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

    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".card-container",
      layoutMode: "masonry",
    });

    imagesloaded(isotopContainer.current).on("progress", function () {
      isotope.current.layout();
    });
  };

  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <>
      <div className="section-full content-inner-2 portfolio text-uppercase treatment-bg" id="portfolio">
        <div className="container">
          <h2 className="title text-center-mbl text-left-p-13">Treatments</h2>
          
          <div className="clearfix" id="lightgallery">
            <ul
              id="masonry"
              ref={isotopContainer}
              className="portfolio-ic dlab-gallery-listing gallery-grid-4 lightgallery text-center"
            >
              {portfolioItems3.slice(0, 3).map((item, index) => (
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
                        <p className="dez-title">
                          <Link href={`/treatments/${item.slug}`}>
                            {item.title}
                          </Link>
                        </p>
                      </div>

                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <div className="text-white float-right">
                            <Link href={`/treatments/${item.slug}`}>
                              <Image 
                                alt=""
                                src="/images/arrow.svg"
                                width="50"
                                height="50"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="center">
              <button className="button dz-bannerbtn bg-button treatment-button" type="button">
                ALL TREATMENTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}