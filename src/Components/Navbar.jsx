import { Link, NavLink } from "react-router-dom";
import userPng from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, signoutUser } = use(AuthContext);
  const handleLogout = () => {
    signoutUser();
  };
  return (
    <div className="flex gap-4  flex-col md:gap-1 items-center md:flex-row justify-between">
      <div>{(user && <p>{user.email}</p>) || <p>{user?.displayName}</p>}</div>
      {/* nav section */}
      <div className="nav flex gap-6 text-lg text-accent">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b pb-1 font-medium" : "font-medium"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b pb-1 font-medium" : "font-medium"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b pb-1 font-medium" : "font-medium"
          }
          to={"/career"}
        >
          Career
        </NavLink>
      </div>
      <div className="flex gap-3">
        {/* login button */}
        <img src={userPng} className="rounded-full" alt="" />
        {user ? (
          <Link
            onClick={handleLogout}
             to={"/auth/login"}
            className=" btn py-2 font-medium px-8 text-white bg-primary"
          >
            {" "}
            Logout{" "}
          </Link>
        ) : (
          <Link
            to={"/auth/login"}
            className=" btn py-2 font-medium px-8 text-white bg-primary"
          >
            {" "}
            Login{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
