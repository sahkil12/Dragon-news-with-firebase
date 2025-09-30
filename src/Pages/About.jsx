import { Navigate, useNavigation } from "react-router-dom";
import Loader from './../Components/Loader';

const About = () => {
   const loader = useNavigation()
    if(loader.state === 'loading'){
        return <Loader></Loader>
    }
    return (
       <Navigate to={'/category/1'}></Navigate>
    );
};

export default About;