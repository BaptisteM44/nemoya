import React from 'react';
import '../styles/pages/equipe.scss'
import Julien from '../assets/img/ju.webp'

import Footer from '../components/Footer/footer'
import Navbar from '../components/Header/Navbar';
import Fade from 'react-reveal/Fade';

function Equipe() {
  return (
    <>
        <Navbar />
        <section className="page-equipe">
            <div className="equipe-title-content">
                <Fade delay={400} top cascade>
                    <div className="equipe-title">
                        <h1>FAISONS QUELQUE CHOSE DE GÉNIAL ENSEMBLE<span className="point">.</span></h1>    
                    </div>
                    <div className="equipe-underTitle">
                        <span>Nemoya est une agence qui vous accompagne dans la digitalisation de votre entreprise.</span><br/>
                        <span>Notre moteur : c’est votre développement, votre réussite et votre succès à travers internet.</span><br/>
                        <span>Nous réalisons votre site web, nous le référençons, nous créons vos visuels… Vous allez devenir une autorité sur votre marché.</span>    
                    </div>    
                </Fade>
                
            </div>
            <div className="equipe-img-content">
                <Fade delay={1300} left cascade>
                    <div className="equipe-img">
                        <img src={Julien} alt="Julien" />
                        <div className="equipe-img-text">
                            <h3>Julien</h3>
                            <p>La spécialité de Julien, hormis celle de nous avoir réunis, c’est la réalisation et la gestion de vos publicités. C’est lui, qui va doubler votre chiffre d’affaires.</p>
                        </div>
                    </div>    
                </Fade>
                <Fade delay={1600} bottom cascade>
                    <div className="equipe-img">
                        <img src="https://media.istockphoto.com/id/1369508766/fr/photo/belle-femme-latine-%C3%A0-succ%C3%A8s-souriante.jpg?s=612x612&w=0&k=20&c=pYpyqpy7vQP529g3Pxtn-VaZo3skT7RmSLb8ReHMIDs=" alt="Elisa" />
                        <div className="equipe-img-text">
                            <h3>Elisa</h3>
                            <p>Le talent d’elisa, c’est la créativité. C’est elle, qui réalisera votre branding et gèrera vos réseaux sociaux. Apprêtez-vous à voir vos followers décoller ?</p>
                        </div>
                    </div>    
                </Fade>
                <Fade delay={1900} right cascade>
                    <div className="equipe-img">
                        <img src="https://media.istockphoto.com/id/1319763895/fr/photo/homme-m%C3%BBr-m%C3%A9lang%C3%A9-de-course-de-sourire-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=A0t2vzsA3771bizeoxt2a3OLdgBbm5_wZn1rk3MxHsk=" alt="Baptiste" />
                        <div className="equipe-img-text">
                            <h3>Baptiste</h3>
                            <p>L’expertise de Baptiste, c’est le développement  de vos sites web , quelle que soit l’ampleur de votre projet, il y arrivera. Grâce à lui, vos clients passeront des heures sur votre site.</p>
                        </div>
                    </div>    
                </Fade>
                
            </div>
        

            <div className="contact-title-content contact-padding">
                <h2 className="contact-title">Vous démarrez un nouveau projet ou souhaitez collaborer avec nous ?</h2>
            </div>
            <Footer />
        </section>
    </>
  );
}

export default Equipe;