import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-2xl p-7 shrink-0 shadow-lg">
        <h2 className="text-center text-3xl font-semibold py-4">
          Register your account
        </h2>
        <div className="border my-3 border-gray-200 mx-auto w-10/12 "></div>
        <div className="card-body">
          <form className="fieldset space-y-2">
            <label className="label text-black text-lg font-medium">
              Your Name
            </label>
            {/* name */}
            <input
              type="text"
              className="input border-none px-6 w-full py-7 bg-base-300"
              placeholder="Enter your name"
            />
            <label className="label text-black text-lg font-medium">
              Photo URL
            </label>
            {/* Photo URL */}
            <input
              type="text"
              className="input border-none px-6 w-full py-7 bg-base-300"
              placeholder="Enter your Photo URL"
            />
            <label className="label text-black text-lg font-medium">
              Email address
            </label>
            {/* email */}
            <input
              type="email"
              className="input border-none px-6 w-full py-7 bg-base-300"
              placeholder="Enter your email address"
            />
            <label className="label text-black text-lg font-medium">
              Password
            </label>
            {/* password */}
            <input
              type="password"
              className="input border-none px-6 w-full py-7 bg-base-300"
              placeholder="Enter your password"
            />
            {/* term and condition */}
            <label className="label my-3">
              <input type="checkbox"  className="checkbox " />
             <span className="text-sm mx-1">Accept Term & Conditions</span>
            </label>
            {/* register button */}
            <button className="btn btn-neutral mt-4 py-6 bg-primary text-lg">
              Register
            </button>
            <p className="text-center mt-3 text-base">
             Already Have An Account ?{" "}
              <Link
                to={"/auth/login"}
                className="scroll-smooth font-semibold text-red-400"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
