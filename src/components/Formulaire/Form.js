import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-name">
                <label htmlFor="Nom">Name</label>
                <input type="text" name="user_name" placeholder="Nom" required />    
            </div>
            <div className="form-email">
                <label>Email</label>
                <input type="email" name="user_email" placeholder="e-mail" required />    
            </div>
            <div className="form-entreprise">
                <label>nom_entreprise</label>
                <input type="text" name="nom_entreprise" placeholder="Nom d'entreprise" required/>    
            </div>
            <div className="form-message">
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Message" required />    
            </div>
            <div className="form-button">
                <input className="form-button-send" type="submit" value="Envoyer" />    
            </div>
        </form>
  );
};
export default Form;