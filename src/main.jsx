import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { CartProvider } from './Contexts/CartContext'  // <-- import provider here

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>          {/* <-- wrap the whole app */}
      <App />
    </CartProvider>
  </BrowserRouter>
);
