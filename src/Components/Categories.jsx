import { useEffect, useState } from "react";
import { NavLink, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const loader = useNavigation()
    if(loader.state === 'loading'){
        return <Loader ></Loader>
    }
  return (
    <div>
      <h2 className="font-semibold text-xl">All Category</h2>
      <div className="grid grid-cols-1 mt-4 gap-3">
        {
            categories.map((category) =>(
                <NavLink key={category.id}
                to={`/category/${category.id}`}
                className={({isActive})=> `${isActive ?'bg-base-300 text-black':'bg-base-100'} btn bg-base-100 border-0 hover:bg-base-300 shadow-none text-xl font-medium text-accent`}>{category.name}</NavLink>
            ) )
        }
      </div>
    </div>
  );
};

export default Categories;
