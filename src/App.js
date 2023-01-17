import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/index.scss'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function index() {
  return (
    <>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default index;