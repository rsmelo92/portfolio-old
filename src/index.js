import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from "./components/LanguageProvider/LanguageProvider"

import App from './App';
import './index.css';

ReactDOM.render(
  <LanguageProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter> 
  </LanguageProvider>, 
  document.getElementById('root')
);
