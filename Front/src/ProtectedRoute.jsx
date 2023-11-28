import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "./ContextManager/UserContext"

export const ProtectedRoute = () => {

  const {isAuthenticated} = useUser();

  if(!isAuthenticated){
    
    return <Navigate to='/login' replace/>
    
  }

  return <Outlet/> 
}