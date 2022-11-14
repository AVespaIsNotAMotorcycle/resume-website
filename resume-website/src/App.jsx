import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { PAGES } from './constants';

import Routes from './components/Routes/Routes';
import Navbar from './components/Navbar/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2F4F4F',
    },
    secondary: {
      main: '#FFFAF0',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar pages={PAGES} />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
