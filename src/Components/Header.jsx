import { format } from 'date-fns';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex gap-3 flex-col space-y-3 my-10 items-center'>
           <img src={logo} alt="" />
           <p className='text-lg/normal text-neutral-600'>Journalism Without Fear or Favour</p>
           <p className='text-xl font-medium'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;