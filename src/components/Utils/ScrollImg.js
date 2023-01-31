import { gsap, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

import '../../styles/index.scss'

gsap.registerPlugin(ScrollTrigger);

const ScrollImg = () => {
  useEffect(() => {

    var timeline = gsap.timeline();

    const mq = window.matchMedia("(min-width: 1025px)");
    if (mq.matches) {
      const elements = [".page-grid1", ".page-grid2", ".page-grid3"];
      const yPercents = [50, 40, -50];
      const duration = 1;

      for (let i = 0; i < elements.length; i++) {
        timeline.to(elements[i], {
          yPercent: yPercents[i],
          duration,
          scrollTrigger: {
            trigger: ".page-nous",
            scrub: true,
            start: "top 500px",
            end: "center 200px", 
            toggleActions: "play none none",
            markers: false
          }
        });
      }

      const margin = "10em";
      gsap.to(".page-chiffres", {
        height: "auto",
        borderRadius: "25px",
        marginLeft: margin,
        marginRight: margin,
        marginBottom: 0,
        duration,
        scrollTrigger: {
          trigger: ".page-chiffres",
          scrub: true,
          start: "top center",
          end: "bottom 200px", 
          toggleActions: "play none none",
          markers: false
        }
      });

      gsap.to(".page-contact", {
        marginTop: "-7em",
        paddingTop: "-6em",
        duration: 10,
        scrollTrigger: {
          trigger: ".page-chiffres",
          scrub: true,
          start: "center center",
          end: "bottom 200px", 
          toggleActions: "play none none",
          markers: false
        }
      });
    }
  }, []);
  
    return (
        <>
        </>
    );
  }

export default ScrollImg;