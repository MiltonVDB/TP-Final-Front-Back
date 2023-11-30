import { createContext, useContext, useEffect, useState} from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/user";
import Cookies from 'js-cookie'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error("useUser debe estar dentro de UserProvider")
  return context
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])

  const signup = async (user) => {
    try {

      const res = await registerRequest(user)

      if (res.status === 200) {

        setUser(res.data)

        setIsAuthenticated(true)

      }
    }catch(error){

      setErrors(error.response.data);

    }
  }


  const signin = async (user) => {
    try {

      const res = await loginRequest(user)

      if (res.status === 200) {

        setUser(res.data)

        setIsAuthenticated(true)

      }
    }catch(error){

      setErrors(error.response.data)

    }
  }

  const signout = () => {

    Cookies.remove('token')

    setUser(null)

    setIsAuthenticated(false)

  }

  useEffect(() => {
    async function checkLogin() {

      const cookies = Cookies.get()

      if(!cookies.token){
        setIsAuthenticated(false)
        setUser(null)
        return
      }
  
      
      try{
  
        const res = await verifyTokenRequest(cookies.token)
  
        if(!res.data){
          setIsAuthenticated(false)
          setUser(null)
          return
        }
  
        setIsAuthenticated(true)
  
        setUser(res.data)
  
      }catch(error){
  
        setIsAuthenticated(false)
  
        setUser(null)
  
      }
      
    }
    checkLogin()
  },[])


  return (
    <UserContext.Provider value={{user, signup, signin, isAuthenticated, errors, signout}}>
      {children}
    </UserContext.Provider>
  )
}