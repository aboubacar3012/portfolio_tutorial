import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import microsoft from "../../assets/microsoft.jpeg";
import facebook from "../../assets/facebook.png";
import capgemini from "../../assets/capgemini.jpeg";
import tesla from "../../assets/tesla.jpeg";
import nojyk from "../../assets/nojyk.png";
import carrefour from "../../assets/carrefour.jpeg";
import oracle from "../../assets/oracle.png";


import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";
import TwitterIcon from "../../assets/twitter.png";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [notifMessage, setNotifMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setNotifMessage(null);
    }, 5000);
  }
  , [notifMessage]);

  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs
      .sendForm(
        "service_p7jkw6l",
        "template_r2zvjv7",
        // @ts-ignore
        form.current,
        "zfcM2bfJmVdhFB1z-"
      )
      .then(
        (result) => {
          if(result.text === "OK"){
           // @ts-ignore
           setNotifMessage("Message envoyé avec succès");
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMsg("");
            
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Mes clients</h1>
        <p className="contactPageDesc">
          Je suis toujours prêt à travailler avec des personnes ambitieuses et
          des entreprises intéressantes. Voici quelques-unes des entreprises
          avec lesquelles j'ai eu le plaisir de travailler.
        </p>
        <div className="clientsImgs">
          <img src={nojyk} alt={nojyk} className="clientsImg" />
          <img src={tesla} alt={tesla} className="clientsImg" />
          <img src={capgemini} alt={capgemini} className="clientsImg" />
          <img src={microsoft} alt={microsoft} className="clientsImg" />
          <img src={facebook} alt={facebook} className="clientsImg" />
          <img src={carrefour} alt={carrefour} className="clientsImg" />
          <img src={oracle} alt={oracle} className="clientsImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contactez-moi</h1>
        <p className="contactPageDesc">
          Vous pouvez me contacter en remplissant le formulaire ci-dessous.
        </p>
        <form
          id="contactForm"
          // @ts-ignore
          ref={form}
          onSubmit={sendEmail}
        >
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nom" className="name" name="from_name" required />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="email" name="from_email" required />
          <input  value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Téléphone" className="phone" name="from_phone" required />
          <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Objet" className="subject" name="from_subject" required />
          <textarea
            placeholder="Entrez votre message..."
            className="msg"
            rows={5}
            required
            name="message"
            value={msg} onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          {notifMessage && <p className="notifMessage">{notifMessage}</p>}
          <button type="submit" className="contactFormButton">
            Envoyer
          </button>

          <div className="links">
            <img src={FacebookIcon} alt="facebook" className="link" />
            <img src={InstagramIcon} alt="instagram" className="link" />
            <img src={YoutubeIcon} alt="youtube" className="link" />
            <img src={TwitterIcon} alt="twitter" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
