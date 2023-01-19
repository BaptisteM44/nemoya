import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/index.scss'
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function index() {
  return (
    <>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/SiteInternet" element={<Services />} />
          <Route path="/Services/Réseauxsociaux" element={<Services />} />
          <Route path="/Services/Branding" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default index;