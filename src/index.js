import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SlideProvider } from './components/context/SlideContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SlideProvider>
    <App />
  </SlideProvider>
);

