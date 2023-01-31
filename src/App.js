import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

import './styles/_settings.scss'
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Equipe from './Pages/Equipe';
import SousPage from './Pages/SousPage/SousPage';


function Index() {

  const location = useLocation();

  useEffect(() => {
    gsap.to('.page', {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
            gsap.to('.page', {
                duration: 0.5,
                opacity: 1,
            });
        },
    });
}, [location]);

  return (
    <>
      <Routes>
          <Route path="/" exact element={<Home className="page" />} />
          <Route path="/Services" element={<Services className="page" />} />




          <Route path="/Services/:id" element={<SousPage className="page"/>} />

          {/* <Route path="/Services/SiteInternet" DataSousPage={DataSousPage.Web} element={<SiteInternet  className="page" />} /> */}
          {/* <Route path="/Services/Reseauxsociaux" DataSousPage={DataSousPage.Media} element={<ReseauxSociaux className="page" />} />
          <Route path="/Services/Branding" DataSousPage={DataSousPage.Branding} element={<Branding className="page" />} /> */}
          <Route path="/Equipe" element={<Equipe className="page" />} />
          <Route path="/Contact" element={<Contact className="page" />} />
      </Routes>
    </>
  );
}

export default Index;