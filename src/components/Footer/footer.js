import React from 'react';
import '../../styles/components/footer.scss';
import Form from '../Formulaire/Form';

function Footer() {
    return (
        <section className="page-contact">
            <div className="contact-title-content">
                <h2 className="contact-title">Vous démarrez un nouveau projet ou souhaitez collaborer avec nous ?</h2>
            </div>
            <footer>
                <div className="contact">
                    <div className="contact-form-content">
                        <Form />
                        <div className="contact-info">
                            <div className="contact-num">
                                <a href="tel:+33102030405">0624234233</a> 
                            </div>
                            <div className="contact-email">
                                <a href="mailto:xxxx@xx.xx"> nemoya@email.com</a> 
                            </div>
                            <div className="contact-credits">
                                <div className="contact-credits-content">
                                    <a href="https://www.instagram.com/nemoya.fr/">Instagram</a>
                                    <a href="https://www.instagram.com/nemoya.fr/">Tiktok</a>
                                    <a href="https://www.instagram.com/nemoya.fr/">Twitter</a>
                                    {/* <a href="https://www.instagram.com/nemoya.fr/">Jsaispas</a> */}
                                </div>
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
                    </div>
                </div>
            </footer>
        </section>
)
    }

    export default Footer;