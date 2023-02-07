import React from 'react';
import ReactDOM from 'react-dom/client';
import { render, cleanup } from '@testing-library/react';
import Home from './Home';

afterEach(cleanup);

it('renders without crashing', async () => {
  render(<Home />);
});
