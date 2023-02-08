import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './AlbumCard.css'
import './CssFiles/AlbumCard.css'
import './CssFiles/Header.css'
import './CssFiles/MusicCard.css'
import './CssFiles/profile.css'
import './CssFiles/Login.css'
import './CssFiles/Search.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
