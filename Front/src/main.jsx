import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './ContextManager/ContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './ContextManager/UserContext'
import { ProductProvider } from './ContextManager/ProductContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <UserProvider>
    <ProductProvider>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
    </ProductProvider>
  </UserProvider>
  
)
