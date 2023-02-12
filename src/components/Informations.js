import '../styles/components/Informations.scss'
import React from "react";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Mediasociaux from '../assets/img/Macimg.png'
import Mac from '../assets/img/Macimg.png'
import Iphone from '../assets/img/iphone.png'
import {ReactComponent as SEO} from '../assets/img/seo.svg'
import {ReactComponent as Conception} from '../assets/img/conception.svg'
import {ReactComponent as Responsive} from '../assets/img/responsive.svg'


const Informations = () => {

    return (
        <div className="page-informations">
            <div className="information-title">
                <Fade top>
                    <h2>
                        Nous gérons toutes sortes de services informatiques qui promettent votre succès
                        <span className="point">.</span>
                    </h2>    
                </Fade>
            </div>
            <Fade delay={300} left cascade>
                <div className="informations-content">
                    <div className="informations-content-bloc">
                        <div className="content-bloc-img">
                            <img className="bloc-img" src={Mac} alt="ordinateur" loading="lazy" height="500px" width="800px" />    
                        </div>
                        
                    </div>
                    <article className="informations-content-article">
                        <h2>Identité visuelle</h2>
                        <p>Faites-vous remarquer en prenant soin de votre image, quel que soit votre domaine d'activité. Un logo impactant, une charte graphique cohérente, une typographie attrayante et des couleurs percutantes sont des éléments clés pour vous démarquer.</p>
                        
                    </article>
                    <Link className="arrow-circle" to="/Services/Branding">
                        <div className="text-arrow">Branding</div>
                        <div className="arrow">⟶</div>    
                    </Link>
                </div>    
            </Fade>
            <Fade  right cascade>
                <div className="informations-content info2">
                    <div className="informations-content-bloc">
                        <div className="content-bloc">
                            <div className="bloc">
                                <Conception />
                                <h2>Conception</h2>
                                <p>Planification et design pour une expérience utilisateur optimale</p>
                            </div>
                            <div className="bloc">
                                <img src={Iphone} alt="Iphone" loading="lazy" width="50px" height="90px" />
                                <h2>UI/UX</h2>
                                <p>Créer une expérience utilisateur intuitive et agréable</p>
                            </div>
                            <div className="bloc">
                                <Responsive />
                                <h2>Responsive</h2>
                                <p>Concevoir un site qui s'adapte</p>
                            </div>
                            <div className="bloc">
                                <SEO />
                                <h2>Optimisation</h2>
                                <p>Assurer la performance et la sécurité du site web à long terme</p>
                            </div> 
                        </div>
                        
                    </div>
                    <article className="informations-content-article">
                        <h2>Conceptions et développement web</h2>
                        <p>Notre équipe peut vous assister pour concevoir ou rafraîchir votre présence en ligne, qu'il s'agisse d'un site web, d'un site e-commerce ou d'une application, en tenant compte de vos souhaits et exigences pour vous offrir une vitrine en ligne qui vous correspond.</p>
                        
                    </article>
                    <Link className="arrow-circle" to="/Services/SiteInternet">
                        <div className="text-arrow1">Web</div>
                        <div className="arrow">⟶</div>    
                    </Link>
                </div>
            </Fade>
            <Fade delay={300} left cascade>
                <div className="informations-content">
                    <div className="informations-content-bloc">
                        <div className="content-bloc-img">
                            <img className="bloc-img" src={Mediasociaux} alt="ordinateur" loading="lazy" height="500px" width="800px" />
                        </div> 
                    </div>
                    <article className="informations-content-article">
                        <h2>Médias sociaux</h2>
                        <p>Notre équipe établit votre stratégie créative digitale. Nous adaptons votre communication actuelle par la création de publications et/ou snack content sur tous vos réseaux. </p>
                    </article>
                    <Link className="arrow-circle" to="/Services/ReseauxSociaux">
                        <div className="text-arrow2">Médias</div>
                        <div className="arrow">⟶</div>
                    </Link>
                </div>
            </Fade>
        </div>
    );
  }
  
  export default Informations;