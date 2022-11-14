import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TextField from './TextField';

it('renders without crashing', async () => {
  let container = document.createElement('div');
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <TextField />
    );
  });
});

