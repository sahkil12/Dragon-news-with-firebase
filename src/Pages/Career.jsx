import { Navigate, useNavigation } from "react-router-dom";
import Loader from './../Components/Loader';

const Career = () => {
    const loader = useNavigation()
    if(loader.state === 'loading'){
        return <Loader></Loader>
    }
    return (
       <Navigate to={'/category/2'}></Navigate>
    );
};

export default Career;