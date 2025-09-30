import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } =use(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <div className="min-h-screen flex items-center justify-center ">
            <Loader></Loader>
        </div>
    }
    if(!user){
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
    }  
    else{
        return children;
    }
    
};

export default PrivateRoute;