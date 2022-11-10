import React from 'react';
import TextField from '../Common/TextField';

function updateForm(form, setForm, field, value) {
  const nForm = form;
  nForm[field] = value;
  setForm(nForm);
}

function ContactForm(form, setForm) {
  const { email, subject, body } = form;

  return (
    <div className="contact-form">
      <TextField
        value={email}
        label="Your email address:"
        margin="normal"
        onChange={(e) => updateForm(form, setForm, 'email', e.value)}
      />
      <TextField
        value={subject}
        label="Subject:"
        margin="normal"
        onChange={(e) => updateForm(form, setForm, 'subject', e.value)}
      />
      <TextField
        value={body}
        label="Message:"
        margin="normal"
        multiline
        minRows={5}
        onChange={(e) => updateForm(form, setForm, 'body', e.value)}
      />
    </div>
  );
}

export default ContactForm;
