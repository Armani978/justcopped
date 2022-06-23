import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter} from "react-router-dom";
import primaryTheme from './themes/primaryTheme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ThemeProvider theme={primaryTheme}>
    <App />
  </ThemeProvider>
  </BrowserRouter>
);


