import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import ProjectsPage from './ProjectsPage';

let container = document.createElement('div');

it('renders without crashing', async () => {
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <ProjectsPage />
    )
  });
});
