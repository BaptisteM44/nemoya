import { gsap, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

import '../../styles/index.scss'

gsap.registerPlugin(ScrollTrigger);


const ScrollTitleNav = () => {
  let titleRef = React.createRef();
  let location = useLocation();



  useEffect(() => {
    let title = titleRef.current;

    const mq = window.matchMedia("(min-width: 1600px)");
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
      <Link ref={titleRef} className="logo"to="/">nemoya.</Link>
    );
  } else {
    return (
      <Link className="logo1"to="/">nemoya.</Link>
    );
  }
};

export default ScrollTitleNav;