import { Link } from 'react-router-dom';
import '../../styles/components/NavbarMenu.scss'
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import Favicon from '../../styles/assets/img/favicon.png'
    
    
const NavbarMenu = () => {

    const [showSlideBar, setShowSlideBar] = useState(false);
    function handleAboutClick() {
        setShowSlideBar(!showSlideBar);
      }

      useEffect(() => {
        if (showSlideBar) {
          gsap.to('.slide-bar', {duration: 0.3, x: 0});
        } else {
          gsap.to('.slide-bar', {duration: 0.3, x: 2000});
        }
      }, [showSlideBar]);
        const location = useLocation();
            useEffect(() => {
            setShowSlideBar(false);
            }, [location.pathname]);

            useEffect(() => {
                const handleScroll = e => {
                  if (showSlideBar) {
                    e.preventDefault();
                  }
                };
                window.addEventListener('wheel', handleScroll, { passive: false });
                return () => {
                  window.removeEventListener('wheel', handleScroll);
                };
              }, [showSlideBar]);
    
    return (
        <>
            <Link className="firstHover" onClick={handleAboutClick} >Services</Link>
            {showSlideBar && (
                <div className={`slide-bar ${showSlideBar ? "show" : ""}`}>
                    <div className="slide-bar-content">
                        <Link className="slide-link firstHover" to="/Services/SiteInternet">Site Internet</Link>
                        <Link className="slide-link firstHover" to="/Services/Reseauxsociaux">Réseaux Sociaux</Link>
                        <Link className="slide-link firstHover" to="/Services/Branding">Branding</Link>    
                    </div>
                    <p className="slide-button" onClick={() => setShowSlideBar(false)}>Fermer</p>
                    <img src={Favicon} alt="logo nemoya" />
                    <div className="slide-slogan">
                        <p>Votre succès notre intérêt </p>
                    </div>
                </div>
            )}
        </>
    );
  }
  
  export default NavbarMenu;