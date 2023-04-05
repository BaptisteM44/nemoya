import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/footer.scss';
import Form from '../Formulaire/Form';

function Footer() {
    return (
            <footer>
                <div className="contact">
                    <div className="contact-form-content">
                        <Form />
                        <div className="contact-info">
                            <div className="contact-num">
                                <a href="tel:+33102030405">06 24 23 42 33</a> 
                            </div>
                            <div className="contact-email">
                                <a href="mailto:xxxx@xx.xx">contact@nemoya.fr</a> 
                            </div>
                            <div className="contact-credits">
                                <div className="contact-credits-content">
                                    <a href="https://www.instagram.com/nemoya.studio/" rel="noreferrer" target="_blank">Instagram</a>
                                    {/* <a href="#" rel="noreferrer" target="_blank">Linkedin</a> */}
                                </div>
                            </div>
                            <div className="footer">
                                <div className="footer-credits">
                                    <div className="footer-credits-content">
                                        <div className="credits-title">
                                            <h2>Agence de Marketing Digital</h2>    
                                        </div>
                                        <div className="credits-entreprise">
                                            <p>NEMOYA</p>
                                        </div>
                                    </div>
                                    <div className="footer-slogan-content">
                                        <div className="slogan-title">
                                            <h2>Votre succès, notre intérêt</h2>
                                        </div>
                                        <div className="slogan2023">
                                            <p>@2023</p>
                                            <Link to="/Legal">Mention Légal</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </footer>
)
    }

    export default Footer;