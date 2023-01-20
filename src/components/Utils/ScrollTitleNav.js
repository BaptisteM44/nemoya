import { gsap, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import '../../styles/index.scss'

gsap.registerPlugin(ScrollTrigger);


const ScrollTitleNav = () => {
  let titleRef = React.createRef();
  let location = useLocation();



  useEffect(() => {
    let title = titleRef.current;

    const mq = window.matchMedia("(min-width: 600px)");
    if (mq.matches) {
    gsap.fromTo(title, {y:580, x:1050, fontSize:"4em"}, {
      y: 0,
      x: 0,
      fontSize: "2.441rem",
      opacity:1,
      color: "#b75d32",
      scrollTrigger: {
        trigger: ".page-presentation",
        start: "top",
        end: "bottom",
        scrub: true,
        toggleActions: "play none none",
        markers: false
      },
    });
  }}, []);
  
  if (location.pathname === '/') {
    return (
      <h1 ref={titleRef} className="logo">
        nemoya.
      </h1>
    );
  } else {
    return (
      <h1 className="logo1">
        nemoya.
      </h1>
    );
  }
};

export default ScrollTitleNav;