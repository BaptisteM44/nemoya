import React, { useEffect, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

import './styles/_settings.scss'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Equipe from './Pages/Equipe';
import SousPage from './Pages/SousPage/SousPage';
import Legal from './Pages/Legal'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

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
      <Wrapper>
        <Routes>
            <Route path="/" exact element={<Home className="page" />} />
            <Route path="/Services/:id" element={<SousPage className="page"/>} />
            <Route path="/Equipe" element={<Equipe className="page" />} />
            <Route path="/Contact" element={<Contact className="page" />} />
            <Route path="/Legal" element={<Legal className="page" />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default Index;