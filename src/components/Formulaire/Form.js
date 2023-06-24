import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/components/Form.scss';

export const Form = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setIsSent(true); // Mettre à jour l'état d'envoi
          setName(''); // Vider le champ de saisie de nom
          setEmail(''); // Vider le champ de saisie d'e-mail
          setEntreprise(''); // Vider le champ de saisie de nom d'entreprise
          setMessage(''); // Vider le champ de saisie de message
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-name">
                <label htmlFor="Nom">Name</label>
                <input type="text" name="user_name" placeholder="Nom" required value={name} onChange={(e) => setName(e.target.value)} />    
            </div>
            <div className="form-email">
                <label>Email</label>
                <input type="email" name="user_email" placeholder="e-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />    
            </div>
            <div className="form-entreprise">
                <label>nom_entreprise</label>
                <input type="text" name="nom_entreprise" placeholder="Nom d'entreprise" required value={entreprise} onChange={(e) => setEntreprise(e.target.value)} />    
            </div>
            <div className="form-message">
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)} />    
            </div>
            <div className="form-button">
                <input className="form-button-send" type="submit" value="Envoyer" />    
            </div>
            {isSent && <p>Votre message a bien été envoyé.</p>} {/* Afficher le message de confirmation si l'e-mail est envoyé */}
        </form>
  );
};
export default Form;
