import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './global-styles'
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App />} />
  </Routes>
  </BrowserRouter>,
);

