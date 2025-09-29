import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "./homeLayOut/LeftAside";
import RightAside from "./homeLayOut/RightAside";

const HomeLayouts = () => {
    return (
        <div>
            <header className="w-11/12 mx-auto">
                <Header></Header>
            <section className="w-11/12 mx-auto my-14 lg:my-20">
                <LatestNews></LatestNews>
            </section>
            <nav className="w-11/12 mx-auto my-16">
                <Navbar></Navbar>
            </nav>
            </header>
            <main className="w-11/12 mx-auto flex flex-col my-4 md:grid md:grid-cols-12 gap-4">
               <aside className="col-span-3 sm:sticky sm:top-8 h-fit">
               <LeftAside></LeftAside>
               </aside>
                <section className="main col-span-6 ">
                    <Outlet></Outlet>
                </section>
               <aside className="col-span-3 sm:sticky sm:top-8 h-fit">
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;