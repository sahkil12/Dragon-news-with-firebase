import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Login With</h2>
      <div className="space-y-3">
        {/* google login */}
        <button className="btn py-6 w-full bg-white text-base border border-secondary text-secondary hover:bg-secondary hover:text-white">
         <FcGoogle size={24}></FcGoogle>
          Login with Google
        </button>
        {/* github login */}
        <button className="btn py-6 w-full  bg-white text-base border border-primary text-primary hover:bg-primary hover:text-white">
         <FaGithub size={24}></FaGithub>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
