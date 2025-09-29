import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayouts,
    children:[
      {
        index: true,
        Component:Home,
      },
      {
        path:'category/:id',
        Component:CategoryNews,
        loader:()=>fetch('/news.json')
      },
      {
        path:'about',
        Component:About,
      },
      {
        path:'career',
        Component:Career,
      }
    ]
  },
  
]);
