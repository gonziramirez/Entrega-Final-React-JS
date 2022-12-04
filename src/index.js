import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopProvider from './contexts/Shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopProvider>
      <App />
    </ShopProvider>
);
