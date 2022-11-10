import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { PAGES } from '../../constants.jsx';

let container = document.createElement('div');

it('renders without crashing', async () => {
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <BrowserRouter>
        <Navbar pages={PAGES} />
      </BrowserRouter>
    );
  });
});
