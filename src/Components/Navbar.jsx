import { NavLink } from "react-router-dom";
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex gap-4 my-14 flex-col md:gap-1 items-center md:flex-row justify-between">
            <div></div>
            {/* nav section */}
                <div className="nav flex gap-6 text-lg text-accent">
                    <NavLink className={({isActive})=> isActive ? 'border-b pb-1 font-medium' : 'font-medium'} to={'/'}>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'border-b pb-1 font-medium' : 'font-medium'} to={'/about'}>About</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'border-b pb-1 font-medium' : 'font-medium'} to={'/career'}>Career</NavLink>
                </div>
                <div className="flex gap-3">
                {/* login button */}
                <img src={user} alt="" />
                <button className=" py-2 font-medium px-8  text-white bg-primary">Login</button>
                </div>
                
        </div>
    );
};

export default Navbar;