import { useContext } from "react";
import Marquee from "react-fast-marquee";
import TitleContext from "../main";
import Loader from "./Loader";

const LatestNews = () => {
  const { newsTitle } = useContext(TitleContext);
  if(!newsTitle){
    return <Loader></Loader>
  }
  const breakingTitle = newsTitle.filter(news=> news.others.is_today_pick)
  return (
    <div className="flex gap-2 items-center p-2 bg-base-300">
      <p className="bg-secondary py-2 px-5 font-semibold text-lg text-base-100">
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={60} className="flex gap-4">
        <div className="flex gap-5">
            {newsTitle && <>{breakingTitle.map((news, index) => <p
            key={index} className="font-semibold">{news.title} |</p> )}</>}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
