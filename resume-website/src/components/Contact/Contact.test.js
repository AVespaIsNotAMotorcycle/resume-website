import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import Contact from './Contact';

let container = document.createElement('div');

it('renders without crashing', async () => {
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <Contact />
    );
  });
});
