import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Routes from './components/Routes/Routes';

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
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
