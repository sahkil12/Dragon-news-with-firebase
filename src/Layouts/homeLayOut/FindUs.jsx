import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="">
      <h2 className="font-bold text-xl my-4">Find Us On</h2>
      <div>
        <div className="join  join-vertical w-full ">
          <button className="btn bg-base-100 border-gray-200 py-7 justify-start text-start join-item px-4 text-base shadow-none"><FaFacebook className="mx-1" size={20}></FaFacebook> Facebook</button>
          <button className="btn px-4 text-base bg-base-100 border-gray-200 py-7 justify-start join-item shadow-none "><FaTwitter className="mx-1" size={20}></FaTwitter> Twitter</button>
          <button className="btn px-4 text-base bg-base-100 border-gray-200 py-7 justify-start join-item shadow-none"><FaInstagram className="mx-1" size={20}></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
