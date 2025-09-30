import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="space-y-5 min-h-screen text-center flex flex-col gap-2 justify-center items-center">
      <h2 className="text-5xl font-bold">404</h2>
      <h2 className="text-4xl font-bold">Page Not Found</h2>
      <Link to={'/'} className="border rounded-md py-3 px-9 font-semibold  text-lg text-white bg-secondary">Home</Link>
    </div>
    );
};

export default Error;