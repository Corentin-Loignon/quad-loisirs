import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uuy51l8', 'template_675q6j6', form.current, '0HICP7Cd4jm4c8gcr')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <FaMapMarkerAlt className='contact__option-icon'/>
            <h4>Adresse</h4>
            <h5>1Bis Montoir de la croix</h5>
            <a href="https://www.google.com/maps/dir//1+bis+Montoir+de+la+Croix,+91780+Saint-Hilaire/@48.4330933,2.0764272,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47e5cb6fee23bed7:0x5e47f412762c853f!2m2!1d2.078605!2d48.433077!3e3?hl=fr" target='_blank' rel="noreferrer">Comment y aller ?</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>corentin.loignon.pro@gmail.cmom</h5>
            <a href="mailto:corentin.loignon.pro@gmail.com" target='_blank' rel="noreferrer">Envoyer un mail</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+33 6 58 66 20 98</h5>
            <a href="https://api.whatsapp.com/send?phone=+33658662098" target='_blank' rel="noreferrer">Envoyer un message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom et prénom' required />
          <input type="email" name='email' placeholder='Votre adresse email' required/>
          <textarea name="message" rows="13" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer votre message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact