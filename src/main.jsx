import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importar o Provider (Produto) )
import ProductProvider from './contexts/ProductContext.jsx'


// Importar o Provider (SideBar) )
import SidebarProvider from './contexts/SidebarContext.jsx'

//Importar o provider (Carrinho)

import CartProvider from "./contexts/CartContext.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(

  <SidebarProvider>

    <CartProvider>

      <ProductProvider>

        <React.StrictMode>

          <App />

        </React.StrictMode>

      </ProductProvider>

    </CartProvider>

  </SidebarProvider>

)
