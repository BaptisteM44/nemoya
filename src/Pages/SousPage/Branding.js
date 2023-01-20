import React from 'react';
import '../../styles/pages/sousPage.scss'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Header/Navbar';

function Branding() {
  return (
    <section className="page-sousPage">
      <Navbar />
      <div className="contact-title-content">
        <h2 className="contact-title">Vous démarrez un nouveau projet ou souhaitez collaborer avec nous ?</h2>
      </div>
      <Footer />
    </section>
  );
}

export default Branding;