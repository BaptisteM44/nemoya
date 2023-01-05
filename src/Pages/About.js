import React from 'react';
import '../styles/pages/about.scss'
import Navbar from '../components/Header/Navbar'
function About() {
    return (
      
      <div>
        <Navbar />
        <h1 className="title">Bienvenue sur ma landing page</h1>
        <p>Voici du contenu</p>
      </div>
    );
  }
  
  export default About;