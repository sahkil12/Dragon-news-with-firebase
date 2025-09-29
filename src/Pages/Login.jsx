import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
  <div className="card bg-base-100 w-full max-w-2xl  p-10 shrink-0 shadow-lg">
    <h2 className="text-center text-3xl font-semibold py-6">Login Your Account</h2>
    <div className="border my-5 border-gray-200 mx-auto w-10/12 "></div>
      <div className="card-body">
        <form className="fieldset space-y-2">
          <label className="label text-black text-lg font-medium">Email address</label>
          <input type="email" className="input border-none px-6 w-full py-7 bg-base-300" placeholder="Enter your email address" />
          <label className="label text-black text-lg font-medium">Password</label>
          <input type="password" className="input border-none px-6 w-full py-7 bg-base-300" placeholder="Enter your password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 py-6 bg-primary text-lg">Login</button>
          <p className="text-center mt-3 text-base">Don’t Have An Account ? <Link to={'/auth/register'} className="scroll-smooth font-semibold text-red-400">Register</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
