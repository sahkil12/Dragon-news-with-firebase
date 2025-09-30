import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
const { registerUser } = use(AuthContext)
const [error, setError] = useState('')
const [show, setShow] = useState(false)
 const navigate = useNavigate()
  const handleRegister= e =>{
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.PhotoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
    const lengthCheck = /^.{8,}$/;
  const numberCheck = /.*\d.*/;
  const specialCheck = /.*[@#$%&*!].*/;
  // password validate--
  if (!lengthCheck.test(password)) {
    setError("Password must be at least 8 characters or longer.");
    return false;
  }
  if (!numberCheck.test(password)) {
    setError("Password must contain at least one number.");
    return false;
  }
  if (!specialCheck.test(password)) {
    setError("Password must contain at least one special character like (@ # $ % & * !).");
    return false;
  }
    // login with firebase data pass 
    registerUser(email, password)
    .then(result =>{
      console.log(result);
      navigate('/')
    })
    .catch(error =>{
      console.log(error);
      setError(error)
    })
  }
  console.log(error);
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-2xl p-7 shrink-0 shadow-lg">
        <h2 className="text-center text-3xl font-semibold py-4">
          Register your account
        </h2>
        <div className="border my-3 border-gray-200 mx-auto w-10/12 "></div>
        <div className="card-body">
          {/* from start */}
          <form onSubmit={handleRegister} className="fieldset space-y-2">
            <label className="label text-black text-lg font-medium">
              Your Name
            </label>
            {/* name */}
            <input
              type="text"
              className="input text-base border-none px-6 w-full py-7 bg-base-300"
              name="name"
              placeholder="Enter your name"
            />
            <label className="label text-black text-lg font-medium">
              Photo URL
            </label>
            {/* Photo URL */}
            <input
              type="text"  name="PhotoURL"
              className="input text-base border-none px-6 w-full py-7 bg-base-300"
              placeholder="Enter your Photo URL"
            />
            <label className="label text-black text-lg font-medium">
              Email address
            </label>
            {/* email */}
            <input
              type="email" name="email"
              className="input text-base border-none px-6 w-full py-7 bg-base-300"
              placeholder="Enter your email address"
            />
            <label className="label text-black text-lg font-medium">
              Password
            </label>
            {/* password */}
            <div className="relative">
              <input
              type={show ? "text":"password"}
              name="password"
              className="input text-base border-none px-6 w-full py-7 bg-base-300"
              placeholder="Enter your password"
            />
            <button onClick={()=>{setShow(!show)}} type="button" className="absolute right-3 top-4">{show ? <IoEyeOff className="text-neutral-700" size={24}></IoEyeOff> :  <IoEye className="text-neutral-700" size={24}></IoEye > }</button>
            </div>
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
