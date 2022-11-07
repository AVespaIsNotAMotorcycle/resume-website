import React from 'react';
import './App.css';

import { PAGES } from './constants.js';

import Routes from './components/Routes/Routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar pages={PAGES} />
      <Routes />
    </div>
  );
}

export default App;
