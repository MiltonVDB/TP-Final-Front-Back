import { createContext, useContext, useState} from "react";
import { registerRequest, loginRequest } from "../api/user";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser debe estar dentro de UserProvider");
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);


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

        console.log(isAuthenticated)

      }
    }catch(error){

      setErrors(error.response.data);

    }
  }


  return (
    <UserContext.Provider value={{user, signup, signin, isAuthenticated, errors}}>
      {children}
    </UserContext.Provider>
  )
}