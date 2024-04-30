import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './css/site.css';
import NotFound from './NotFound';

import HomePage from './website/HomePage';
import reportWebVitals from './reportWebVitals';
import LoginPage from './website/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/login/" Component={LoginPage} />

        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
