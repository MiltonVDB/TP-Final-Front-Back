import React from 'react'
import { HomePage, DetailPage, CartPage, FormPage, LoginPage, RegisterPage} from './Screens'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar, Footer } from './Components'
import {ProtectedRoute} from './ProtectedRoute'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>

        <Route element={<ProtectedRoute/>}/>
          
          
            {/* <NavBar/> */}
    
            
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/detail/:id' element={<DetailPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/form' element={<FormPage/>}/>
            
    
            {/* <Footer/> */}
          


        <Route/>
      </Routes>
    </>
  )
}

export default App
