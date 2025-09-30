import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } =use(AuthContext)
    
    if(!user){

        return <Navigate to={'/auth/login'}></Navigate>;
    }  
    else{
        return children;
    }
    
};

export default PrivateRoute;