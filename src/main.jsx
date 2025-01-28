
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductContextProvider from './context/ProductContext'; // Import ProductContextProvider
import CartContextProvider from './context/CartContext'; // Import CartContextProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
