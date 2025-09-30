import { createBrowserRouter, Link } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from './../Pages/Home';
import CategoryNews from './../Pages/CategoryNews';
import About from './../Pages/About';
import Career from './../Pages/Career';
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Errorpage/Error";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
   element:<HomeLayouts></HomeLayouts>,
    children:[
      {
        index: true,
        element:<Home></Home>
      },
      {
        path:'category/:id',
        element:<CategoryNews></CategoryNews> ,
        loader:()=>fetch('/news.json')
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'career',
        element:<Career></Career>
      }
    ]
  },
  {
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      }
    ]
  },
  {
    path:'news-details/:id',
    element:<PrivateRoute>
       <NewsDetails></NewsDetails>
       </PrivateRoute> ,
    loader:()=>fetch('/news.json')
  },
  {
    path:'/*',
    element:<Error></Error>
  }
  
]);
