import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Naslovnica from './pages/Naslovnica';
import OstalaPutovanjaForma from './pages/OstalaPutovanjaForma';
import SkolskaPutovanjaForma from './pages/SkolskaPutovanjaForma';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' index element={<Naslovnica />} />
  <Route path='/' element={<App />} />
  <Route path='/Ostala-putovanja-forma' element={<OstalaPutovanjaForma />} />
  <Route path='/skolskaputovanja-forma' element={<SkolskaPutovanjaForma />} />
  </Routes>
  </BrowserRouter>,
);

