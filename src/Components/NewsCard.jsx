import { Link } from "react-router-dom";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = news;

  const date = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="flex items-center bg-base-300 justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold ">{author?.name}</h3>
            <span className="text-base text-gray-500">{date}</span>
          </div>
        </div>
        {/* Bookmark and Share Icons */}
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-secondary">
            <FaRegBookmark size={20}/>
          </button>
          <button className="hover:text-primary">
            <FaShareAlt size={20}/>
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 hover:underline py-4 text-xl font-bold">{title}</h2>

      {/* Image */}
      <img src={thumbnail_url} alt={title} className="w-full object-cover p-3 rounded-2xl" />

      {/* Details */}
      <div className="p-4 text-base/normal text-accent">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}…
            <Link to={`/news-details/${id}`} className="text-blue-600 ml-1 hover:underline">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>
        <div className="border-b my-5 mx-4 border-gray-300"></div>
      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-1 ">
          <FaStar size={20} className="text-orange-400"/>
          <FaStar size={20} className="text-orange-400"/>
          <FaStar size={20} className="text-orange-400"/>
          <FaStar size={20} className="text-orange-400"/>
          <span className="text-accent text-lg font-semibold">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2 text-accent">
          <FaEye size={20}/>
          <span className="text-base">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
