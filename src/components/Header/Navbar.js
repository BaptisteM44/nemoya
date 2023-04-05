import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.scss'
import React, { useEffect, useState, useRef } from "react";
import ScrollTitleNav from '../Utils/ScrollTitleNav';
import NavbarMenu from './NavbarMenu'
import {ReactComponent as Instagram} from '../../assets/img/instagram.svg'
import {ReactComponent as Linkedin} from '../../assets/img/linkedin.svg'
import Fade from 'react-reveal/Fade';

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }


  const [isVisible, setIsVisible] = useState(true);
  // let previousScrollPosition = 0;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPosition = window.pageYOffset;
    
  //     if (currentScrollPosition > 850) {
  //       setIsVisible(previousScrollPosition > currentScrollPosition);
  //       setShowLinks(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //     previousScrollPosition = currentScrollPosition;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const previousScrollPosition = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > 850) {
      setIsVisible(previousScrollPosition.current > currentScrollPosition);
      setShowLinks(false);
    } else {
      setIsVisible(true);
    }
    previousScrollPosition.current = currentScrollPosition;
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
                <Link className="link-contact" to="/Contact">Contact</Link>
                <div className="credits">
                <button className="credits-link" onClick={() => window.open("https://www.instagram.com/nemoya.studio/", "_blank")} aria-label="Notre compte Instagram"><Instagram /></button>
<button className="credits-link" onClick={() => window.open("https://www.linkedin.com/feed/", "_blank")} aria-label="Notre compte Linkedin"><Linkedin /></button>

                  {/* <a href="https://www.instagram.com/nemoya.studio/"  rel="noreferrer" target="_blank" aria-label="Notre compte Instagram"><Instagram /></a>
                  <a href="https://www.linkedin.com/feed/" rel="noreferrer" target="_blank" aria-label="Notre compte Linkedin"><Linkedin /></a> */}
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