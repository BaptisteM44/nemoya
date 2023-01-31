import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../styles/pages/sousPage.scss'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Header/Navbar';
import data from '../../components/Data.json';

function SousPage() {
  const { id } = useParams();
  
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const page = data.pages.find((page) => page.id === id);
    setPageData(page);
  }, [id]);


  return (
    <div className="page-sousPage">
      <Navbar />
        <div className="sousPage-content">
          <h2 className="sousPage-title" >{pageData.title}</h2>
        </div>
      
      <Footer />
    </div>
  );
}

export default SousPage;