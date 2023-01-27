import { gsap, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

import '../../styles/index.scss'

gsap.registerPlugin(ScrollTrigger);


const ScrollImg = () => {
  useEffect(() => {

    var timeline = gsap.timeline();

    const mq = window.matchMedia("(min-width: 1025px)");
    if (mq.matches) {
    timeline.to(".page-grid1", {
        yPercent: 60,
        duration: 1,
        scrollTrigger: {
          trigger: ".page-nous",
          scrub: true,
          start: "top 500px",
          end: "center 200px", 
          toggleActions: "play none none",
          markers: false
      },
      
    });
    gsap.to(".page-grid2", {
        yPercent: 40,
        duration: 1,
        scrollTrigger: {
          trigger: ".page-nous",
          scrub: true,
          start: "top 500px",
          end: "center 200px", 
          toggleActions: "play none none",
          markers: false
      },
    });
    gsap.to(".page-grid3", {
        yPercent: -40,
        duration: 1,
        scrollTrigger: {
          trigger: ".page-nous",
          scrub: true,
          start: "top 500px",
          end: "center 200px", 
          toggleActions: "play none none",
          markers: false
      },
    });
  }}, []);
  
    return (
        <>
        </>
    );
  }

export default ScrollImg;