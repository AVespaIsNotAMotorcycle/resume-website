import React, { useState } from 'react';

const CONTACT_FORM = {
  user_email: '',
  subject: '',
  body: '',
};

function Contact () {
  const [contactForm, setContactForm] = useState(CONTACT_FORM);

  return(
    <h1>
      Contact
    </h1>
  );
}

export default Contact;
