import { gsap, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import '../../styles/index.scss'

gsap.registerPlugin(ScrollTrigger);


const ScrollTitleNav = () => {


  let titleRef = React.createRef();

  useEffect(() => {
    let title = titleRef.current;

    gsap.fromTo(title, {y:500, x:0}, {
      y: 0,
      x: 0,
      fontSize: "32px",
      scrollTrigger: {
        trigger: ".page-presentation",
        start: "top ",
        end: "bottom",
        scrub: true,
        toggleActions: "play none none",
      },
    });
  }, []);
  return (

        <h1 ref={titleRef} className="logo">Nemoya</h1>    

    
  );
}

export default ScrollTitleNav;