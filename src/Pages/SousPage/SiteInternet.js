import React from 'react';
import '../../styles/pages/sousPage.scss'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Header/Navbar';
import Computer from '../../styles/assets/img/computer.svg'

function Branding() {
  return (
    <section className="page-sousPage">
      <div className="sousPage-content">
        <div className="sousPage-title">
          <h2>Site web<span className="point">.</span></h2>
            <h3>Un site web doit être représentatif de votre histoire.</h3>  
        </div>
      </div>
      <div className="sousPage-cards">
        <div className="sousPage-cards-content">
          <div className="cards-svg">
            <img src={Computer} alt="Ordinateur" />
          </div>
          <div className="cards-text">
            <p>Chez Nemoya, nous créons votre site web en respectant votre image de marque, en implémentant vos valeurs à votre site. C’est un projet que nous menons à bien, ensemble.</p>
            <p>Nous saurons vous conseiller sur ce qui est en tendance pour 2023 mais nous saurons surtout vous écouter.</p>
          </div>
        </div>
        <div className="sousPage-cards-content cards-content2">
          <div className="cards-svg">
            <svg width="120px" stroke-width="0.77" height="120px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M10 17h-.667a2 2 0 01-2-2v-1.889C7.333 12.556 6 12 6 12s1.333-.556 1.333-1.111V9a2 2 0 012-2H10M14 17h.667a2 2 0 002-2v-1.889C16.667 12.556 18 12 18 12s-1.333-.556-1.333-1.111V9a2 2 0 00-2-2H14" stroke="#000000" stroke-width="0.77" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z" stroke="#000000" stroke-width="0.77" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <div className="cards-text">
            <p>Que vous nous sollicitez pour un site vitrine ou un site e-commerce, votre site sera codé par notre développeur. Trop d’agences vous proposent des sites déjà pré-réalisés sur lesquels vous ne pouvez pas tout choisir. Chez Nemoya, vous aurez la main sur l'entièreté de votre site.</p>
            <p>Nous optimisons 100% des sites que nous créons en incluant un référencement naturel ce qui vous positionne naturellement dans les premières places lors d’une recherche Google (SEO).</p>
          </div>
        </div>
        <div className="sousPage-cards-content">
          <div className="cards-svg">
            <svg width="60px" stroke-width="0.77" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M10 17h-.667a2 2 0 01-2-2v-1.889C7.333 12.556 6 12 6 12s1.333-.556 1.333-1.111V9a2 2 0 012-2H10M14 17h.667a2 2 0 002-2v-1.889C16.667 12.556 18 12 18 12s-1.333-.556-1.333-1.111V9a2 2 0 00-2-2H14" stroke="#000000" stroke-width="0.77" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z" stroke="#000000" stroke-width="0.77" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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

export default Branding;