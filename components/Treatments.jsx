"use client";
import { treatments } from "@/data/treatments";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio2() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const [isLoading, setIsLoading] = useState(true);
  const isotopContainer = useRef();
  const isotope = useRef();

  useEffect(() => {
    let resizeHandler;

    const initIsotop = async () => {
      try {
        setIsLoading(true);
        const Isotope = (await import("isotope-layout")).default;
        const imagesloaded = (await import("imagesloaded")).default;

        const mql = window.matchMedia('(max-width: 768px)');
        const layoutMode = mql.matches ? 'fitRows' : 'masonry';

        isotope.current = new Isotope(isotopContainer.current, {
          itemSelector: ".card-container",
          layoutMode: layoutMode,
          percentPosition: true,
          masonry: {
            columnWidth: '.card-container'
          }
        });

        // Handle window resize
        resizeHandler = () => {
          if (isotope.current) {
            isotope.current.layout();
          }
        };

        window.addEventListener('resize', resizeHandler);

        imagesloaded(isotopContainer.current).on("progress", function () {
          if (isotope.current) {
            isotope.current.layout();
          }
        }).on("done", function() {
          setIsLoading(false);
        });

      } catch (error) {
        console.error("Error initializing Isotope:", error);
        setIsLoading(false);
      }
    };

    initIsotop();

    // Cleanup function
    return () => {
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, []);

  const updateCategory = (val) => {
    setCurrentFilter(val);
    if (isotope.current) {
      isotope.current.arrange({
        filter: val,
      });
    }
  };

  return (
    <div className="section-full content-inner-treatment portfolio text-uppercase" id="portfolio">
      <div className="container">
        
        <div className="clearfix" id="lightgallery">
          <ul
            id="masonry"
            ref={isotopContainer}
            className="portfolio-ic dlab-gallery-listing gallery-grid-4 lightgallery text-center"
            style={{ opacity: isLoading ? 0 : 1 }}
          >
            {treatments.map((item, index) => (
              <li
                className={`${item.filter} card-container col-12 col-sm-6 col-lg-4 p-a0`}
                key={index}
              >
                <div className="dlab-box dlab-gallery-box">
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                    <Link href={`/treatments/${item.slug}`} className="treatment-box-img">
                      <Image
                        src={item.imageSrc}
                        width={650}
                        height={528}
                        alt={item.title}
                        className="img-fluid"
                        priority={index < 4}
                        loading={index < 4 ? "eager" : "lazy"}
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