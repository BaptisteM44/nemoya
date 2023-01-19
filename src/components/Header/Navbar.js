import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.scss'
import React, { useEffect, useState } from "react";
import ScrollTitleNav from '../Utils/ScrollTitleNav';

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true);
  let previousScrollPosition = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > 750) {
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
          <header id="nav" className={`navbar ${isVisible ? "" : "hidden"}`}>
            <ScrollTitleNav />
            <div className="menu">
              <Link className="firstHover" to="/">Accueil</Link>
              <Link className="firstHover" to="/About">Services</Link>
              <Link className="firstHover" to="/Contact">Contact</Link>   
            </div>
          </header>
    );
  }
  
  export default Navbar;