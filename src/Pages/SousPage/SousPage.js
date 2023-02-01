import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../styles/pages/sousPage.scss'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Header/Navbar';
import data from '../../components/Data';


function SousPage() {
  const { id } = useParams();
  
  const [item, setItem] = useState({});

  useEffect(() => {

    const itemData = data.find(item => item.id === id);
    setItem(itemData);
  }, [id]);

  return (
    <div className="page-sousPage">
      <Navbar />
        <div className="sousPage-content">
          <h2 className="sousPage-title" >{item.title}</h2>
        </div>
        <div className="sousPage-titleImg-content">
          <img className="titleImg-content" src={item.imgTitle} alt="computer" />
        </div>
        <div className="sousPage-title2-content">
          <h3 className="title2-content">nos services</h3>
        </div>
        <div className="sousPage-section-service">
          <article className="sousPage-article">
            <div className="sousPage-article-left">
              <div className="sousPage-info-content">
                <div className="info-content-img">
                  <img src={item.imgTitle1} alt="img1" />
                </div>
                <div className="info-content-title">
                  <h3>{item.title1}</h3>
                  <p>{item.parag1}</p>
                </div>
              </div>
              <div className="sousPage-info-content">
                <div className="info-content-img">
                  <img src={item.imgTitle2} alt="img1" />
                </div>
                <div className="info-content-title">
                  <h3>{item.title2}</h3>
                  <p>{item.parag2}</p>
                </div>
              </div>
              <div className="sousPage-info-content">
                <div className="info-content-img">
                  <img src={item.imgTitle3} alt="img1" />
                </div>
                <div className="info-content-title">
                  <h3>{item.title3}</h3>
                  <p>{item.parag3}</p>
                </div>
              </div>
              <div className="sousPage-info-content">
                <div className="info-content-img">
                  <img src={item.imgTitle4} alt="img1" />
                </div>
                <div className="info-content-title">
                  <h3>{item.title4}</h3>
                  <p>{item.parag4}</p>
                </div>
              </div> 
            </div>
          </article>
          <div className="sousPage-right-img">
            <img className="right-img" src={item.imgDroite} alt="" />
          </div>
        </div>
        <div className="sousPage-title2-content">
          <h3 className="title2-content">nos réalisations</h3>
        </div>
      <div className="footer-padding">
        <Footer />  
      </div>
      
    </div>
  );
}

export default SousPage;