import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

const CONTACT_FORM = {
  email: '',
  subject: '',
  body: '',
};

function Contact() {
  const [contactForm, setContactForm] = useState(CONTACT_FORM);

  return (
    <div className="contact-page">
      <ContactForm form={contactForm} setForm={setContactForm} />
    </div>
  );
}

export default Contact;
