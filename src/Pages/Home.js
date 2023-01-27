import React from 'react';
import '../styles/index.scss'

import Favicon from '../styles/assets/img/favicon.png'
import Julien from '../styles/assets/img/Julien.jpg'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Header/Navbar';
import Informations from '../components/Informations';
import Chiffres from '../components/Chiffres';

function Home() {
    return (
      
      <div className="body">
        
        <Navbar />
        <section className="page-presentation">
          <img className="favicon" src={Favicon} alt="logo nemoya" />
          <div className="page-presentation-content">
            <div className="presentation-title">
              <h1 className="presentation-title1">Agence de</h1>
              <h2 className="presentation-title2">Marketing Digital</h2>
              <p className="presentation-slogan">Votre succès, notre intérêt<span className="point">.</span></p>
            </div>
            
          </div>
          <div className="presentation-footer">
            <div className="do-title-content">
              <div className="do-title-row">
                <div className="inner">
                  <h2 className="do-title">Site web</h2>
                  <h2 className="do-title do-title1">Branding</h2>
                  <h2 className="do-title do-title2">Medias sociaux</h2>
                  <h2 className="do-title">Site web</h2>
                  <h2 className="do-title do-title1">Branding</h2>
                  <h2 className="do-title do-title2">Medias sociaux</h2>
                  <h2 className="do-title">Site web</h2>
                  <h2 className="do-title do-title1">Branding</h2>
                  <h2 className="do-title do-title2">Medias sociaux</h2>
                  <h2 className="do-title">Site web</h2>
                  <h2 className="do-title do-title1">Branding</h2>
                  <h2 className="do-title do-title2">Medias sociaux</h2>   
                </div>
              </div>
          </div>
          </div>
        </section>
        <section className="page-do">
          <div className="do-what-explain">
              <h2>Ce que nous faisons<span className="point">.</span></h2>
            <p>
              Nemoya est une agence qui vous accompagne dans la digitalisation de votre entreprise. Notre moteur : c’est votre développement, votre réussite et votre succès à travers internet.
              Nous réalisons votre site web, nous le référençons, nous créons vos visuels… Vous allez devenir une autorité sur votre marché.
            </p>
          </div>
          <div className="do-what-content">
            <div className="do-what">
              <div className="do-what-title-content">
                <h2 className="do-what-title">Stratégie<span className="point">.</span></h2>
              </div>
              <div className="do-what-exemples">
                <span>Analytique et recherche</span>
                <span>Ateliers interactifs</span>
                <span>Stratégie de marque</span>
                <span>Stratégie de contenu</span>
                <span>Stratégie numérique</span>
              </div>
            </div>
            <div className="do-what">
              <div className="do-what-title-content">
                <h2 className="do-what-title">Conception<span className="point">.</span></h2>
              </div>
              <div className="do-what-exemples">
                <span>Direction créative</span>
                <span>Guide de marque</span>
                <span>Prototypes</span>
                <span>UI/UX et conception web</span>
                <span>Création d’éléments visuels</span>
              </div>
            </div><div className="do-what">
              <div className="do-what-title-content">
                <h2 className="do-what-title">Développement<span className="point">.</span></h2>
              </div>
              <div className="do-what-exemples">
                <span>Conception de l’architecture du système</span>
                <span>Optimisation des performances</span>
                <span>Développement</span>
              </div>
            </div>
          </div>
        </section>
        <Informations />
        <section className="page-nous">
          <div className="page-text">
              <h2 >Rencontrez notre équipe
                <span className="point">.</span>
              </h2>
            <p>Notre métier consiste à développer votre marketing digital, 
            votre présence sur internet et ainsi, vous apporter de la visibilité.
            </p>          
          </div>
          <div className="page-parent">
            <div className="page-grid1 page-grid-content">
              <img src={Julien} alt="Julien" />
              <div className="page-who">
                <h3>Julien</h3>
                <p>Fondateur et gestion des Branding</p>
              </div>
            </div>
            <div className="page-grid2 page-grid-content">
              <img src="https://media.istockphoto.com/id/1369508766/fr/photo/belle-femme-latine-%C3%A0-succ%C3%A8s-souriante.jpg?s=612x612&w=0&k=20&c=pYpyqpy7vQP529g3Pxtn-VaZo3skT7RmSLb8ReHMIDs=" alt="Elisa" />
              <div className="page-who">
                <h3>Elisa</h3>
                <p>Gestion des réseaux et création de contenus</p>
              </div>
            </div>
            <div className="page-grid3 page-grid-content">
              <img src="https://media.istockphoto.com/id/1319763895/fr/photo/homme-m%C3%BBr-m%C3%A9lang%C3%A9-de-course-de-sourire-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=A0t2vzsA3771bizeoxt2a3OLdgBbm5_wZn1rk3MxHsk=" alt="Baptiste" />
              <div className="page-who">
                <h3>Baptiste</h3>
                <p>Développeur Web</p>
              </div>
            </div>
          </div>
          
        </section>
        <Chiffres />
        <section className="page-contact">
          <div className="contact-title-content">
            <h2 className="contact-title">Parlez-nous de votre projet<span className="point">.</span></h2>
          </div>
          <Footer />
        </section>
        
      </div>
      
    );
  }
  
  export default Home;