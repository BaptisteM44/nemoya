import React from 'react';
import '../../styles/pages/sousPage.scss'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Header/Navbar';
import {ReactComponent as Computer} from '../../styles/assets/img/computer.svg'
import {ReactComponent as Confiance} from '../../styles/assets/img/confiance.svg'
import Typewriter from "typewriter-effect";


function SiteInternet() {



  return (
    <section className="page-sousPage">
      <div className="sousPage-content">
        <div className="sousPage-title">
          <h2>Site web<span className="point">.</span></h2>
            <h3>Un site web doit être représentatif de votre histoire.</h3>  
        </div>
        
      </div>
      <div className="sousPage-cards">
        <div className="sousPage-cards-content cards">
          <div className="cards-svg">
            <Computer />
          </div>
        <div className="cards-text">
          <p>Chez Nemoya, nous créons votre site web en respectant votre image de marque, en implémentant vos valeurs à votre site. C’est un projet que nous menons à bien, ensemble.</p>
          <p>Nous saurons vous conseiller sur ce qui est en tendance pour 2023 mais nous saurons surtout vous écouter.</p>
        </div>
        </div>
        <div className="sousPage-cards-content cards cards-content2">
          <div className="cards-svg">
          <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter)=> {
          
              typewriter
              
              .typeString("Développement")
              .pauseFor(1000)
              .deleteAll()
              .typeString("script(function(){ SEO/GOOGLE/JS})(); script")
              .pauseFor(500)
              .deleteAll()
              .typeString("Architecture")
              .start();
              
              
              }}
              /> 
          </div>
          <div className="cards-text">
            <p>Que vous nous sollicitez pour un site vitrine ou un site e-commerce, votre site sera codé par notre développeur. Trop d’agences vous proposent des sites déjà pré-réalisés sur lesquels vous ne pouvez pas tout choisir. Chez Nemoya, vous aurez la main sur l'entièreté de votre site.</p>
            <p>Nous optimisons 100% des sites que nous créons en incluant un référencement naturel ce qui vous positionne naturellement dans les premières places lors d’une recherche Google (SEO).</p>
          </div>
        </div>
        <div className="sousPage-cards-content">
          <div className="cards-svg">
            <Confiance />
          </div>
          <div className="cards-text">
            <p>En nous faisant confiance, vous établissez un réel partenariat. Vous aurez ainsi un accès à un chat collaboratif sur lequel nous pourrons échanger. Pas de système de ticket.</p>
          </div>
        </div>  
      </div>
        
      <Navbar />
      <div className="contact-title-content">
        <h2 className="contact-title">Vous démarrez un nouveau projet ou souhaitez collaborer avec nous ?</h2>
      </div>
      <Footer />
    </section>
  );
}

export default SiteInternet;