import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin, user } = use(AuthContext);
  const navigate = useNavigate()
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        // console.log(result);
         navigate('/')
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  if(user){
    return ;
  }
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Login With</h2>
      <div className="space-y-3">
        {/* google login */}
        <button
          onClick={handleGoogleLogin}
          className="btn py-6 w-full bg-white text-base border border-secondary text-secondary hover:bg-secondary hover:text-white"
        >
          <FcGoogle size={24}></FcGoogle>
          Login with Google
        </button>
        {/* github login */}
        <button
          onClick={handleGithubLogin}
          className="btn py-6 w-full  bg-white text-base border border-primary text-primary hover:bg-primary hover:text-white"
        >
          <FaGithub size={24}></FaGithub>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
