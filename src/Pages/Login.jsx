import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { use, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // login with firebase data pass
    setError('')
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
      
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-2xl p-3 md:p-10 shrink-0 shadow-lg">
        <h2 className="text-center text-3xl font-semibold py-6">
          Login Your Account
        </h2>
        <div className="border my-5 border-gray-200 mx-auto w-10/12 "></div>
        <div className="card-body">
          {/* login form */}
          <form onSubmit={handleLogin} className="fieldset space-y-2">
            <label className="label text-black text-lg font-medium">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="input text-base border-none px-6 w-full py-7 bg-base-300"
              placeholder="Enter your email address"
            />
            <label className="label text-black text-lg font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input text-base border-none px-6 w-full py-7 bg-base-300"
                placeholder="Enter your password"
              />
              <button
                onClick={() => {
                  setShow(!show);
                }}
                type="button"
                className="absolute right-3 top-4"
              >
                {show ? (
                  <IoEyeOff className="text-neutral-700" size={24}></IoEyeOff>
                ) : (
                  <IoEye className="text-neutral-700" size={24}></IoEye>
                )}
              </button>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <p className="text-red-400 font-medium text-sm py-3">{error}</p>
            <button className="btn btn-neutral mt-4 py-6 bg-primary text-lg">
              Login
            </button>
            <p className="text-center mt-3 text-base">
              Don’t Have An Account ?{" "}
              <Link
                to={"/auth/register"}
                className="scroll-smooth font-semibold text-red-400"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
