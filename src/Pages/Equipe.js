import React from 'react';
import '../styles/pages/equipe.scss'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Header/Navbar';

function Equipe() {
  return (
    <section className="page-equipe">
      <Navbar />
    

      <div className="contact-title-content contact-padding">
        <h2 className="contact-title">Vous démarrez un nouveau projet ou souhaitez collaborer avec nous ?</h2>
      </div>
      <Footer />
    </section>
  );
}

export default Equipe;