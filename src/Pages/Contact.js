import React from 'react';
import '../styles/pages/contact.scss'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Header/Navbar';

function Contact() {
  return (
    <div className="page-contact">
      <Navbar />
      <Footer />
    </div>
  );
}

export default Contact;