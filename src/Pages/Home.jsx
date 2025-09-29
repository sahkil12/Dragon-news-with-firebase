import { Navigate, useNavigation } from "react-router-dom";

const Home = () => {
    const loader = useNavigation()
    if(loader.state === 'loading'){
        return <div className="flex my-60 justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    return (
       <Navigate to={'/category/0'}></Navigate>
    );
};

export default Home;