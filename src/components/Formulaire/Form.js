// import React, { useState } from 'react';
// import axios from 'axios';

// import '../../styles/components/Form.scss'

// function Form() {
//     const [nom, setNom] = useState('');
//     const [email, setEmail] = useState('');
//     const [nomEntreprise, setNomEntreprise] = useState('');
//     const [message, setMessage] = useState('');
//     const [status, setStatus] = useState(null);
  
//     const handleSubmit = (event) => {
//       event.preventDefault();

//       axios.post('/send-email', { nom, email, nomEntreprise, message })
//       .then(response => {
//         setStatus('SUCCESS');
//       })
//       .catch(error => {
//         setStatus('ERROR');
//       });
//       // traitement du formulaire
//     }
//     return (
//         <div className="contact-form-content">
//             <form className="contact-form" onSubmit={handleSubmit}>
//                 <div className="form-name">
//                     <label htmlFor="Nom">Nom :</label>
//                     <input
//                     type="text"
//                     id="nom"
//                     name="nom"
//                     placeholder="Nom"
//                     value={nom}
//                     onChange={(event) => setNom(event.target.value)}
//                     />
//                 </div>
//                 <div className="form-email">
//                     <label htmlFor="email">Adresse mail :</label>
//                     <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="e-mail"
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value)}
//                     />
//                 </div>
//                 <div className="form-entreprise">
//                     <label htmlFor="nom_entreprise">Nom de l'entreprise :</label>
//                     <input
//                     type="text"
//                     id="nom_entreprise"
//                     name="nom_entreprise"
//                     placeholder="Nom d'entreprise"
//                     value={nomEntreprise}
//                     onChange={(event) => setNomEntreprise(event.target.value)}
//                     />
//                 </div>
//                 <div className="form-message">
//                     <label htmlFor="message">Message :</label>
//                     <textarea
//                     id="message"
//                     name="message"
//                     placeholder="Message"
//                     value={message}
//                     onChange={(event) => setMessage(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <input className="form-button" type="submit" value="Envoyer" />
//                 </div>
//                 {status === 'SUCCESS' && <p>Let's go!</p>}
//             </form>
//             <div className="contact-info">
//                 <div className="contact-num">
//                     <a href="tel:+33102030405">0624234233</a> 
//                 </div>
//                 <div className="contact-email">
//                     <a href="mailto:xxxx@xx.xx"> email@email.com</a> 
//                 </div>
//             </div>
//         </div>
//     );
//   }
  
//   export default Form;
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
    <div className="contact-form-content">
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
        <div className="contact-info">
            <div className="contact-num">
                <a href="tel:+33102030405">0624234233</a> 
            </div>
            <div className="contact-email">
                <a href="mailto:xxxx@xx.xx"> email@email.com</a> 
            </div>
        </div>
    </div>
  );
};
export default Form;