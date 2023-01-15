import '../styles/components/Informations.scss'
import React from "react";
import Iphone from '../styles/assets/img/iphone.png'
import Google from '../styles/assets/img/google.svg'
import Facebook from "../styles/assets/img/facebook-squared.svg"
import Instagram from '../styles/assets/img/instagram.svg'
import Tiktok from '../styles/assets/img/tiktok.svg'

const Informations = () => {

    return (
        <section className="page-informations">
            <div className="informations-content">
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
                    <p>Réalisation de votre site internet sur mesure</p>
                    <div className="arrow-circle">
                        <div className="arrow">⟶</div>
                    </div>
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
                    <p>Réalisation de votre site internet sur mesure</p>
                    <div className="arrow-circle">
                        <div className="arrow">⟶</div>
                    </div>
                </article>
            </div>
            <div className="informations-content">
                <div className="informations-content-bloc">
                    <div className="content-bloc">
                        <div className="bloc bloc1">
                            <img src={Facebook} alt="logo Facebook" />
                        </div>
                        <div className="bloc bloc1">
                            <img src={Instagram} alt="Logo Instagram" />
                        </div>
                        <div className="bloc bloc1">
                            <img src={Google} alt="Logo Google" />
                        </div>
                        <div className="bloc bloc1">
                            <img src={Tiktok} alt="Logo Tiktok" />
                        </div> 
                    </div>
                    
                </div>
                <article className="informations-content-article">
                    <h1>Conceptions et développement web</h1>
                    <p>Réalisation de votre site internet sur mesure</p>
                    <div className="arrow-circle">
                        <div className="arrow">⟶</div>
                    </div>
                </article>
                
            </div>

        </section>
    );
  }
  
  export default Informations;