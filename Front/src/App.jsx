import React from 'react'
import { HomePage, DetailPage, CartPage, FormPage, LoginPage, RegisterPage} from './Screens'
import { Route, Routes } from 'react-router-dom'
import { NavBar, Footer } from './Components'




function App() {

  return (
    <>

      <Routes>

        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>

        <Route path='' element={

          <>

            <NavBar/>
    
            <Routes>
              
              <Route path='/' element={<HomePage/>}/>
              <Route path='/detail/:id' element={<DetailPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/form' element={<FormPage/>}/>

            </Routes>
    
            <Footer/>

          </>

        }/>

      </Routes>
      
    </>
  )
}

export default App
