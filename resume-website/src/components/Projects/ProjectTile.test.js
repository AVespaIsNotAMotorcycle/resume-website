import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectTile from './ProjectTile';

let container = document.createElement('div');

it('renders without crashing', async () => {
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <BrowserRouter>
        <ProjectTile title={"Test Title"} link={"/"} />
      </BrowserRouter>
    )
  });
});

