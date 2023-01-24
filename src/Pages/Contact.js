import React from 'react';
import '../styles/pages/contact.scss'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Header/Navbar';

function Contact() {
  return (
    <section className="page-contact">
      <Navbar />
      <div className="contact-title-content contact-padding">
        <h2 className="contact-title">Vous démarrez un nouveau projet ou souhaitez collaborer avec nous ?</h2>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;