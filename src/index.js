import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainContext from '../src/Context.js';
import Phone from './phone';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContext>
      <div className='container'>
        <App />
        <Phone />
      </div>
    </MainContext>
  </React.StrictMode>
);
