import React from 'react';
import '../../styles/pages/sousPage.scss'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Header/Navbar';

function Branding() {
  return (
    <section className="page-sousPage">
      <div className="sousPage-content">
        <h2>Site web</h2>
          <h3>Un site web doit être représentatif de votre histoire.</h3>
          <p>Chez Nemoya, nous créons votre site web en respectant votre image de marque, en implémentant vos valeurs à votre site. C’est un projet que nous menons à bien, ensemble.</p>
          <p>Nous saurons vous conseiller sur ce qui est en tendance pour 2023 mais nous saurons surtout vous écouter.</p>
          <p>Que vous nous sollicitez pour un site vitrine ou un site e-commerce, votre site sera codé par notre développeur. Trop d’agences vous proposent des sites déjà pré-réalisés sur lesquels vous ne pouvez pas tout choisir. Chez Nemoya, vous aurez la main sur l'entièreté de votre site.</p>
          <p>Nous optimisons 100% des sites que nous créons en incluant un référencement naturel ce qui vous positionne naturellement dans les premières places lors d’une recherche Google (SEO)</p>
          <p>En nous faisant confiance, vous établissez un réel partenariat. Vous aurez ainsi un accès à un chat collaboratif sur lequel nous pourrons échanger. Pas de système de ticket.</p>  
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