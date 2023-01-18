import '../styles/components/Informations.scss'
import React from "react";
import { Link } from 'react-router-dom';

import Siteweb from '../styles/assets/img/siteweb.png'
import Branding from '../styles/assets/img/branding.png'
import Mediasociaux from '../styles/assets/img/mediassociaux.png'
import Mac from '../styles/assets/img/Macimg.png'
import Iphone from '../styles/assets/img/iphone.png'
// import Google from '../styles/assets/img/google.svg'
// import Facebook from "../styles/assets/img/facebook-squared.svg"
// import Instagram from '../styles/assets/img/instagram.svg'
// import Tiktok from '../styles/assets/img/tiktok.svg'

const Informations = () => {

    return (
        <div className="page-informations">
            <div className="information-title">
                <h2>
                    Nous gérons toutes sortes de services informatiques qui promettent votre succès
                    <span className="point">.</span>
                </h2>
                
            </div>
            <div className="informations-content">
                <div className="informations-content-bloc">
                    <img className="content-bloc-img" src={Mac} alt="image ordinateur" />
                </div>
                <article className="informations-content-article">
                    <h1>Branding</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rem, sed reiciendis nesciunt itaque nisi delectus temporibus placeat officiis ducimus odio velit molestias, ex aliquid nostrum voluptatum asperiores est quis!</p>
                    <Link className="arrow-circle" to="/About">
                        <div className="arrow">⟶</div>    
                    </Link>
                </article>
                
            </div>
            <div className="informations-content info2">
                <div className="informations-content-bloc">
                    <div className="content-bloc">
                        <div className="bloc">
                            <img src={Iphone} alt="" />
                            <h2>Stratégie produit</h2>
                            <p>Une recherche approfondie et une stratégie optimisée sont les fondements du meilleur développement de produit. </p>
                        </div>
                        <div className="bloc">
                            <img src={Iphone} alt="" />
                            <h2>Stratégie produit</h2>
                            <p>Une recherche approfondie et une stratégie optimisée sont les fondements du meilleur développement de produit. </p>
                        </div>
                        <div className="bloc">
                            <img src={Iphone} alt="" />
                            <h2>Stratégie produit</h2>
                            <p>Une recherche approfondie et une stratégie optimisée sont les fondements du meilleur développement de produit. </p>
                        </div>
                        <div className="bloc">
                            <img src={Iphone} alt="" />
                            <h2>Stratégie produit</h2>
                            <p>Une recherche approfondie et une stratégie optimisée sont les fondements du meilleur développement de produit. </p>
                        </div> 
                    </div>
                    
                </div>
                <article className="informations-content-article">
                    <h1>Conceptions et développement web</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati dolor ea quidem quaerat aut officiis impedit labore modi minima non facere mollitia eum vel aperiam commodi, sint sit libero!</p>
                    <Link className="arrow-circle" to="/About">
                        <div className="arrow">⟶</div>    
                    </Link>
                </article>
            </div>
            <div className="informations-content">
            <div className="informations-content-bloc">
                    <img className="content-bloc-img" src={Mediasociaux} alt="image ordinateur" />
                </div>
                <article className="informations-content-article">
                    <h1>Médias sociaux</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae deleniti officiis molestiae enim numquam sint ducimus, nam a voluptate soluta nostrum dignissimos nisi facilis sapiente magnam quisquam voluptas maiores.</p>
                    <Link className="arrow-circle" to="/About">
                        <div className="arrow">⟶</div>
                    </Link>
                </article>
                
            </div>

        </div>
    );
  }
  
  export default Informations;