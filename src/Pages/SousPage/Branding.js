import React from 'react';
import '../../styles/pages/sousPage.scss'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Header/Navbar';
import {ReactComponent as Branding1} from '../../styles/assets/img/branding1.svg'
import {ReactComponent as Branding2} from '../../styles/assets/img/branding2.svg'
import {ReactComponent as Branding3} from '../../styles/assets/img/branding3.svg'
import Fade from 'react-reveal/Fade';
// import Typewriter from "typewriter-effect";

function Branding() {
  return (
    <section className="page-sousPage">
    <Fade top cascade>
      <div className="sousPage-content">
        <div className="sousPage-title">
          <h2>Branding<span className="point">.</span></h2>
            <h3>Un site web doit être représentatif de votre histoire.</h3>  
        </div>
     </div>  
    </Fade>
    <div className="sousPage-cards">
      <Fade delay={1000} right cascade>
        <div className="sousPage-cards-content cards">
          <div className="cards-svg">
            <Branding1 />
          </div>
          <div className="cards-text">
            <p>Le branding c’est votre signature, c’est le fait de concevoir une réelle image de marque afin de vous rendre identifiable par tous.</p>
            <p>Cela passe par la conception de votre charte graphique, votre identité visuelle (logotype principal, logotype secondaire, typographie, couleurs…).</p>
          </div>
        </div>  
      </Fade>
      <Fade delay={1500} left cascade>
        <div className="sousPage-cards-content cards cards-content2">
          <div className="cards-svg">
          <Branding2 />
          </div>
          <div className="cards-text">
            <p>Les objectifs sont multiples : développer la fidélité de vos clients, la notoriété de votre marque, votre identité et créer un engagement autour de votre marque.</p>
          </div>
        </div>  
      </Fade>
      <Fade right cascade>
        <div className="sousPage-cards-content">
          <div className="cards-svg">
          <Branding3 />
          </div>
          <div className="cards-text">
            <p>Pas de panique, nous sommes là.</p>
            <p>Nos experts sauront s’imprégner de votre histoire afin de créer, un branding à votre image.</p>
          </div>
        </div>   
      </Fade>
       
    </div>
      
    <Navbar />
    <Fade top cascade>
      <div className="contact-title-content">
        <h2 className="contact-title">Vous démarrez un nouveau projet ou souhaitez collaborer avec nous ?</h2>
      </div>  
    </Fade>
    
    <Footer />
  </section>
  );
}

export default Branding;