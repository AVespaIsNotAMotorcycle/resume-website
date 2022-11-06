import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

let container = document.createElement('div');

it('renders without crashing', async () => {
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  });
});
