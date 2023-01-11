import React from 'react';
import '../styles/index.scss'
import Footer from '../components/Footer/footer'

import Iphone from '../styles/assets/img/iphone.png'
import Google from '../styles/assets/img/google.svg'
import Facebook from "../styles/assets/img/facebook-squared.svg"
import Instagram from '../styles/assets/img/instagram.svg'
import Tiktok from '../styles/assets/img/tiktok.svg'
import Imgcomputer from '../styles/assets/img/computer.jpg'
import NavbarScroll from '../components/Utils/NavbarScroll';

function Home() {
    return (
      
      <div className="body">
        <NavbarScroll />
        <section className="page-presentation">
          
        </section>

        <div className="do-title-content">
            <div className="do-title-row">
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>
              <h2 className="do-title">On fait quoi</h2>  
            </div>
          </div>
        <section className="page-do">
          <div className="do-what-content">
            <div>
              
            </div>
            <div className="do-what">
              <h3 className="do-what-num">01</h3>
              <div className="do-what-title-content">
                <p className="do-what-title">Web</p>
              </div>
              <div className="do-what-exemples">
                <span>Création</span>
                <span>Refonte</span>
                <span>Sur-mesure</span>  
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
                <span>Ciblage</span>
                <span>Réalisation</span>  
              </div>
            </div>
          </div>

        </section>
        <section className="page-precision">
          <div className="precision-slogan">
            <div className="precision-slogan-content">
              <h2>Titre Slogan génial</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum perspiciatis velit laudantium? Aliquid, alias? Necessitatibus accusantium tenetur, nemo autem voluptates, voluptate esse fuga vero doloremque minima et, repudiandae veniam.</p>
            </div>
            <div className="parent">
              <div className="div1 grid-commun">
                <div className="grid2-content gridtext-content">
                  <h2>Conception et développement Web</h2>
                  <p>Nous concevons vos outils digitaux. From scratch, nous mettons au centre de nos préoccupations l'utilisateur de demain, bla bla</p>
                </div>
              </div>
              <div className="div2 grid-commun">
                <div className="grid2-img-content">
                  <img  src={Facebook} alt="facebook-squared.svg" />
                  <img  src={Tiktok} alt="tiktok.svg" />
                  <img  src={Google} alt="google.svg" /> 
                  <img  src={Instagram} alt="instagram.svg" />   
                </div>
              </div>
              <div className="div3 grid-commun">
                <div className="grid3-img-content">
                  <img src={Imgcomputer} alt="computer.jpg" />
                </div>
              </div>

              <div className="div4 grid-commun">
                <div className="gridtext-content">
                  <h2>Augmentez votre nombre de prospects</h2>
                  <p>Aujourd’hui il est possible d’attirer des prospects ultra qualifiés simplement grâce à des stratégies digitales efficaces. Nous mettons en place des stratégies afin d’augmenter votre nombre de leads journalier.</p>
                </div>
              </div>
              <div className="div5 grid-commun">
                <div className="grid-number">
                  <div className="gridtext-content">
                    <h2>Boostez la visibilité de votre Business</h2>
                    <p>L’une des plus grandes difficultés rencontrées par une entreprise est certainement celle de booster sa visibilité. Jungle Media vous aide à accroître votre visibilité et ainsi vous démarquer de vos concurrents.</p>
                  </div>
                </div>
              </div>
              <div className="div6 grid-commun">
                  <div className="gridtext-content">
                    <img src={Iphone} alt="" />
                  </div>
              </div>
              <div className="div7 grid-commun">
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
        <section className="page-nous">
          <div className="page-text">
            <h2>Notre équipe pour vous accompagner</h2>
            <p>Notre métier consiste à développer votre marketing digital, 
            votre présence sur internet et ainsi, vous apporter de la visibilité.
            </p>          
          </div>
          <div className="page-parent">
            <div className="page-grid1 page-grid-content">
              <img src="https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/289963128_3223439244650783_1295564351741153690_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=5r-byhNCcbgAX9tx6O6&_nc_ht=scontent-bru2-1.xx&oh=00_AfCj0SrRf1RFXFkE0nfj8DuzP6UXuNyEfZUv3ILtJnRGYw&oe=63BF0F54" alt="" />
              <div className="page-who">
                <h3>Julien</h3>
                <p>Fondateur et gestion des publicités</p>
              </div>
            </div>
            <div className="page-grid2 page-grid-content">
              <img src="https://media.istockphoto.com/id/1369508766/fr/photo/belle-femme-latine-%C3%A0-succ%C3%A8s-souriante.jpg?s=612x612&w=0&k=20&c=pYpyqpy7vQP529g3Pxtn-VaZo3skT7RmSLb8ReHMIDs=" alt="" />
              <div className="page-who">
                <h3>Elisa</h3>
                <p>Gestion des réseaux et création de contenus</p>
              </div>
            </div>
            <div className="page-grid3 page-grid-content">
              <img src="https://media.istockphoto.com/id/1319763895/fr/photo/homme-m%C3%BBr-m%C3%A9lang%C3%A9-de-course-de-sourire-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=A0t2vzsA3771bizeoxt2a3OLdgBbm5_wZn1rk3MxHsk=" alt="" />
              <div className="page-who">
                <h3>Baptiste</h3>
                <p>Développeur Web</p>
              </div>
            </div>
          </div>
          
        </section>
        <Footer />
      </div>
      
    );
  }
  
  export default Home;