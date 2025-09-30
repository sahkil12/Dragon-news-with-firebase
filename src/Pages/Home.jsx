import { Navigate, useNavigation } from "react-router-dom";
import Loader from "../Components/Loader";

const Home = () => {
    const loader = useNavigation()
    if(loader.state === 'loading'){
        return <Loader></Loader>
    }
    return (
       <Navigate to={'/category/0'}></Navigate>
    );
};

export default Home;