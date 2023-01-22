import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.scss'
import React, { useState } from "react";


const NavbarResponsive = () => {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

return (

    <div className={`navbarResponsive ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="menuReponsive">

            <Link className="firstHover" to="/">Accueil</Link>
            <Link className="firstHover" to="/Contact">Contact</Link>    
        </div>
        
        <button className="navbar_burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
        </button>
    </div>
);
}

export default NavbarResponsive;