import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/index.scss'

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > prevScrollPosition) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPosition(currentScrollPosition);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);
    return (
      <div>
        
        <header>
        <div className={`navbar ${visible ? 'visible' : ''} blurred`}>
          <div className="logo">Nemoya</div>
          <div className="menu">
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/contact">Contact</Link>   
          </div>
        </div>
          
        </header>
      </div>
    );
  }
  
  export default Navbar;