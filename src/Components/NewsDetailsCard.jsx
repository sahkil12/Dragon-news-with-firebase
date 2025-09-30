import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const NewsDetailsCard = ({ news }) => {
    const {
    title,
    thumbnail_url,
    details,
  } = news;
  
  return (
    <div className="border m-1 p-6 rounded-xl border-gray-300 space-y-7">
        <img src={thumbnail_url} className="w-full h-[450px] object-cover rounded-md" alt="" />
        <h2 className="font-bold text-2xl/relaxed ">{title}</h2>
        <p className="text-accent text-base/relaxed">{details} </p>
        <Link to={`/category/${news.category_id}`} 
        className="text-lg  flex gap-2 items-center w-fit justify-start text-white font-semibold px-7 mt-8 py-3 bg-secondary"
        >
        <IoMdArrowBack size={23}/> All news in this category
        </Link>
    </div>
  );
};

export default NewsDetailsCard;
