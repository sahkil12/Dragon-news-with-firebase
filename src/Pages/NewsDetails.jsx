import Header from "../Components/Header";
import RightAside from "../Layouts/homeLayOut/RightAside";

const NewsDetails = () => {
    return (
        <div className="w-11/12 mx-auto">
              <header>
                <Header></Header>
              </header>
              <main className="flex flex-col  my-4 md:grid md:grid-cols-12 gap-4">
                <section className="col-span-9 sticky top-8 h-fit">
                    <h1 className="text-xl font-bold">News Section</h1>
                    <div className="border py-10 m-1 p-5 rounded-xl border-gray-300">

                    </div>
                </section>
                <aside className="col-span-3">
                   <RightAside></RightAside>
                </aside>
              </main>
        </div>
    );
};

export default NewsDetails;