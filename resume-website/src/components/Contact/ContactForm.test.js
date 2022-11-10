import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import ContactForm from './ContactForm';

const CONTACT_FORM = {
  user_email: '',
  subject: '',
  body: '',
};

let container = document.createElement('div');

it('renders without crashing', async () => {
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <ContactForm />
    );
  });
});
