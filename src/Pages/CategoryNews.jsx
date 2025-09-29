import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Components/NewsCard";
import TitleContext from "../main";

const CategoryNews = () => {
    const { id } = useParams()
    const newsData = useLoaderData()
    const [categoryNews, setCategoryNews] =useState([])
    const { setNewsTitle } = useContext(TitleContext)
    useEffect(()=>{
        setNewsTitle(newsData)
    },[newsData, setNewsTitle])
    useEffect(()=>{
        if(id == '0'){
            setCategoryNews(newsData);
            return;
        }
        else if(id == '1'){
           const filterNews = newsData.filter(news => news.others.is_today_pick === true)
        setCategoryNews(filterNews);
        }else{
            const filterNews = newsData.filter(news => news.category_id == id)
            setCategoryNews(filterNews);
        }
    },[id, newsData, setNewsTitle])
    return (
        <div>
            <h2 className="text-xl font-semibold">Total <span className="text-secondary text-bold">{categoryNews.length}</span> News Found</h2>
            <div className="grid grid-cols-1 gap-5 my-5">
                {
                    categoryNews.map((news, index) => <NewsCard key={index} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;