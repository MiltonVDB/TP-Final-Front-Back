import { Outlet, Navigate } from "react-router-dom"
import { useUser } from "../ContextManager/UserContext";


export const AdminRoute = () => {

    const {isAuthenticated} = useUser();

    if(!isAuthenticated){
      
      return <Navigate to='/login' replace />
      
    }
  
    return <Outlet />
}

