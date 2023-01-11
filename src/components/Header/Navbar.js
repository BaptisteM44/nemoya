import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.scss'
import React from "react";

const Navbar = () => {
  
    return (
      <div>
        <header>
            <div className="menu">
              <Link to="/">Accueil</Link>
              <Link to="/about">À propos</Link>
              <Link to="/contact">Contact</Link>   
            </div>
        </header>
      </div>
    );
  }
  
  export default Navbar;