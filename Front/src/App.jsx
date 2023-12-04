import React from 'react'
import { HomePage, DetailPage, CartPage, FormPage, LoginPage, RegisterPage, AdministratePage, CreatePage} from './Screens'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar, Footer } from './Components'
import { PrivateRoute } from './ProtectedRoute/PrivateRoute'  

function App() {

  return (
    <>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/detail/:id' element={<DetailPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/contacto' element={<FormPage/>}/>
          <Route path='/administrate' element={<AdministratePage/>}/>
          <Route path='/create' element={<CreatePage/>}/>
        </Route>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
