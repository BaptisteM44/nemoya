import '../../styles/components/Navbar.scss'
import React, { useEffect, useState } from "react";
import '../../styles/components/Navbar.scss'
import Navbar from '../Header/Navbar';
import ScrollTitleNav from './ScrollTitleNav';

const NavbarScroll = () => {

const [isVisible, setIsVisible] = useState(true);
  let previousScrollPosition = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > 900) {
        if (previousScrollPosition > currentScrollPosition) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
        <div id="nav" className={`navbar ${isVisible ? "" : "hidden"}`} >
            <Navbar />
            <ScrollTitleNav />
        </div>

  )}
export default NavbarScroll;