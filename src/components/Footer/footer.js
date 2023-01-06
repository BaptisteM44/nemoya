import React, {useState} from "react";
import '../../styles/index.scss'


function Footer() {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [nomEntreprise, setNomEntreprise] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // traitement du formulaire
    }

    return (
        <section className="page-contact">
            <div className="contact-title-content">
                <h2 className="contact-title">Contact</h2>
            </div>
            <footer>
                <div className="contact">
                    <div className="contact-title">
                        <h2>Commencer un projet</h2>    
                    </div>
                    <div className="contact-form-content">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-name">
                                <label htmlFor="Nom">Nom :</label>
                                <input
                                type="text"
                                id="nom"
                                name="nom"
                                placeholder="Nom"
                                value={nom}
                                onChange={(event) => setNom(event.target.value)}
                                />
                            </div>
                            <div className="form-email">
                                <label htmlFor="email">Adresse mail :</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="e-mail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="form-entreprise">
                                <label htmlFor="nom_entreprise">Nom de l'entreprise :</label>
                                <input
                                type="text"
                                id="nom_entreprise"
                                name="nom_entreprise"
                                placeholder="Nom d'entreprise"
                                value={nomEntreprise}
                                onChange={(event) => setNomEntreprise(event.target.value)}
                                />
                            </div>
                            <div className="form-message">
                                <label htmlFor="message">Message :</label>
                                <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                />
                            </div>
                            <div>
                                <input className="form-button" type="submit" value="Envoyer" />
                            </div>
                        </form>
                        <div className="contact-info">
                            <div className="contact-num">
                                <a href="tel:+33102030405">0624234233</a> 
                            </div>
                            <div className="contact-email">
                                <a href="mailto:xxxx@xx.xx"> email@email.com</a> 
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-credits">
                            <div className="footer-credits-content">
                                <div className="credits-title">
                                    <h2>Entreprise Marketing Digital</h2>    
                                </div>
                                <div className="credits-entreprise">
                                    <p>NOMEYA</p>
                                </div>
                            </div>
                            <div className="footer-slogan-content">
                                <div className="slogan-title">
                                    <h2>Votre succès, notre intérêt</h2>
                                </div>
                                <div className="slogan2023">
                                    <p>@2023</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer-link footer-credits">
                            <div className="footer-link-content">
                                <a href="https://www.instagram.com/nemoya.fr/">Instagram</a>
                                <a href="https://www.instagram.com/nemoya.fr/">Tiktok</a>
                                <a href="https://www.instagram.com/nemoya.fr/">Twitter</a>
                                <a href="https://www.instagram.com/nemoya.fr/">Jsaispas</a>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </section>
)
    }

    export default Footer;