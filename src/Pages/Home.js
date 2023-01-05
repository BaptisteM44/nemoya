import React from 'react';
import '../styles/index.scss'

import Logo from '../styles/assets/img/logo.png'
import Navbar from '../components/Header/Navbar'
import Google from '../styles/assets/img/google.svg'
import Facebook from "../styles/assets/img/facebook-squared.svg"
import Instagram from '../styles/assets/img/instagram.svg'
import Tiktok from '../styles/assets/img/tiktok.svg'
import Imgcomputer from '../styles/assets/img/computer.jpg'

function Home() {
    return (
      
      <div className="body">
        <Navbar />
        <section className="page-presentation">
          <div className="presentation-content">
            <h1 className="presentation-title">NEMOYA</h1>
            <img className="presentation-logo" src={Logo} alt="logo.png" />  
          </div>
          
        </section>
        <section className="page-do">
          <div className="do-title-content">
            <h2 className="do-title">What we do</h2>
          </div>
          <div className="do-what-content">
            <div className="do-what">
              <h3 className="do-what-num">01</h3>
              <div className="do-what-title-content">
                <p className="do-what-title">Branding</p>
              </div>
              <div className="do-what-exemples">
                <span>Stratégie</span>
                <span>Identité</span>
                <span>Rebrand</span>  
              </div>
            </div>
            <div className="do-what">
              <h3 className="do-what-num">02</h3>
              <div className="do-what-title-content">
                <p className="do-what-title">Digital</p>
              </div>
              <div className="do-what-exemples">
                <span>Stratégie</span>
                <span>Identité</span>
                <span>Rebrand</span>  
              </div>
            </div><div className="do-what">
              <h3 className="do-what-num">03</h3>
              <div className="do-what-title-content">
                <p className="do-what-title">Mise en avant</p>  
              </div>
              <div className="do-what-exemples">
                <span>Stratégie</span>
                <span>Identité</span>
                <span>Rebrand</span>  
              </div>
            </div><div className="do-what">
              <h3 className="do-what-num">04</h3>
              <div className="do-what-title-content">
                <p className="do-what-title">Social Média</p>  
              </div>
              <div className="do-what-exemples">
                <span>Stratégie</span>
                <span>Identité</span>
                <span>Rebrand</span>  
              </div>
            </div>
          </div>

        </section>
        <section className="page-precision">
          <div className="precision-title-content">
            <h2 className="precision-title">Pack</h2>
          </div>
          <div className="precision-slogan">
            <div className="precision-slogan-content">
              <h2>Titre Slogan génial</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum perspiciatis velit laudantium? Aliquid, alias? Necessitatibus accusantium tenetur, nemo autem voluptates, voluptate esse fuga vero doloremque minima et, repudiandae veniam.</p>
            </div>
            <div class="parent">
              <div class="div1 grid-commun">ok </div>
              <div class="div2 grid-commun">
                <div className="div2-img-content">
                  <img  src={Facebook} alt="facebook-squared.svg" />
                  <img  src={Tiktok} alt="tiktok.svg" />
                  <img  src={Google} alt="google.svg" /> 
                  <img  src={Instagram} alt="instagram.svg" />   
                </div>
              </div>
              <div class="div3 grid-commun">
                <div className="grid3-img-content">
                  <img src={Imgcomputer} alt="computer.jpg" />
                </div>
              </div>

              <div class="div4 grid-commun"> </div>
              <div class="div5 grid-commun">
                <div className="grid-number">
                  <div className="gridtext-content">
                    <h2>Boostez la visibilité de votre Business</h2>
                    <p>L’une des plus grandes difficultés rencontrées par une entreprise est certainement celle de booster sa visibilité. Jungle Media vous aide à accroître votre visibilité et ainsi vous démarquer de vos concurrents.</p>
                  </div>
                </div>
              </div>
              <div class="div6 grid-commun">
                  <div className="gridtext-content">
                    <h2>Augmentez votre nombre de prospects</h2>
                    <p>Aujourd’hui il est possible d’attirer des prospects ultra qualifiés simplement grâce à des stratégies digitales efficaces. Nous mettons en place des stratégies afin d’augmenter votre nombre de leads journalier.</p>
                  </div>
                  {/* <div className="grid-number-content">
                    <h2>4</h2>
                    <p>Nombre de Clients satisfaits</p>
                  </div>   */}
              </div>
              <div class="div7 grid-commun">
                <div className="grid-number">
                  <div className="grid-number-content">
                    <h2>42</h2>
                    <p>Nombre de Café</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-precision">
          <div className="precision-title-content">
            <h2 className="precision-title">Nous</h2>
          </div>
          
          
        </section>
      </div>
      
    );
  }
  
  export default Home;