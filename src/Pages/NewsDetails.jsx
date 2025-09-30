import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Components/Header";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import RightAside from "../Layouts/homeLayOut/RightAside";
import { useEffect, useState } from "react";

const NewsDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState({})

    useEffect(()=>{
        const singleNewsData = data.find(ne=>ne.id === id)
       setNews(singleNewsData);
    },[id, data])
    return (
        <div className="w-11/12 mx-auto">
              <header>
                <Header></Header>
              </header>
              <main className="flex flex-col  my-4 md:grid md:grid-cols-12 gap-4">
                <section className="col-span-9 space-y-3 sticky top-5 h-fit">
                    <h1 className="text-xl font-bold">News Section</h1>
                    <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </section>
                <aside className="col-span-3">
                   <RightAside></RightAside>
                </aside>
              </main>
        </div>
    );
};

export default NewsDetails;