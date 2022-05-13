import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Naslovnica from './components/pages/Naslovnica';
import OstalaPutovanjaForma from './components/pages/OstalaPutovanjaForma';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' index element={<Naslovnica />} />
  <Route path='/' element={<App />} />
  <Route path='/Ostala-putovanja-forma' element={<OstalaPutovanjaForma />} />
  </Routes>
  </BrowserRouter>,
);

