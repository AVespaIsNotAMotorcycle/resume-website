import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import Button from './Button';

it('renders without crashing', async () => {
  let container = document.createElement('div');
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <Button />
    );
  });
});

it('renders Button when type is invalid', async () => {
  let container = document.createElement('div');
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <Button type="ResumeSite"/>
    );
  });
});
