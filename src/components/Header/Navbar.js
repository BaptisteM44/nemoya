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
        <header>
          <div id="nav" className={`navbar ${isVisible ? "" : "hidden"}`}>
            <ScrollTitleNav />
            <div className="menu">
              <Link to="/">Accueil</Link>
              <Link to="/About">Services</Link>
              <Link to="/Contact">Contact</Link>   
            </div>
          </div>
        </header>
    );
  }
  
  export default Navbar;