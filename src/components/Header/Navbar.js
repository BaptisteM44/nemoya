import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.scss'
import React, { useEffect, useState } from "react";
import ScrollTitleNav from '../Utils/ScrollTitleNav';
import NavbarMenu from './NavbarMenu'
import Instagram from '../../styles/assets/img/instagram.svg'
import Linkedin from '../../styles/assets/img/linkedin.svg'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }


  const [isVisible, setIsVisible] = useState(true);
  let previousScrollPosition = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > 850) {
        if (previousScrollPosition > currentScrollPosition) {
          setIsVisible(true);
          
        } else {
          setIsVisible(false);
          // handleShowLinks(true)
        }
      }
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
    return (
          <header id="nav" className={`navbar ${isVisible ? "" : "hidden"} ${showLinks ? "show-nav" : "hide-nav"}`}>
            <ScrollTitleNav />
            <div className="menu">
              <Link className="firstHover" to="/">Accueil</Link>
              <NavbarMenu />
              <Link className="firstHover" to="/Contact">Contact</Link>
              <div className="credits">
                <a href="https://www.instagram.com/nemoya.studio/"><img src={Instagram} alt="logo instagram" /></a>
                <a href="https://www.linkedin.com/feed/"><img src={Linkedin} alt="logo instagram" /></a>
              </div>
            </div>
            <button className="navbar_burger" onClick={handleShowLinks}>
              <span className="burger-bar"></span>
            </button>
          </header>
    );
}
  
  export default Navbar;