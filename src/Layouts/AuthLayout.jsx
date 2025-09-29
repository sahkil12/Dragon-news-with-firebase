import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      <header className="w-11/12 mx-auto py-10">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
            <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
