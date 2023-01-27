import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.scss'
import React, { useEffect, useState } from "react";
import ScrollTitleNav from '../Utils/ScrollTitleNav';
import NavbarMenu from './NavbarMenu'
import {ReactComponent as Instagram} from '../../styles/assets/img/instagram.svg'
import {ReactComponent as Linkedin} from '../../styles/assets/img/linkedin.svg'
import Fade from 'react-reveal/Fade';
// import Instagram from '../../styles/assets/img/instagram.svg'
// import Linkedin from '../../styles/assets/img/linkedin.svg'

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
            <Fade delay={300}>
              <div className="menu">
                <Link className="firstHover" to="/">Accueil</Link>
                <NavbarMenu />
                <Link className="firstHover" to="/Equipe">Équipe</Link>
                <Link className="firstHover link-contact" to="/Contact">Contact</Link>
                <div className="credits">
                  <a href="https://www.instagram.com/nemoya.studio/"><Instagram /></a>
                  <a href="https://www.linkedin.com/feed/"><Linkedin /></a>
                </div>
              </div>  
            </Fade>
            
            <button className={`navbar_burger ${isVisible ? "" : "hidden"}  `}onClick={handleShowLinks}>
              <span className="burger-bar"></span>
            </button>
          </header>
    );
}
  
  export default Navbar;