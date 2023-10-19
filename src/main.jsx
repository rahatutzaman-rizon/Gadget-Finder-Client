
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './Component/Pages/Errorpage.jsx';
import Home from './Component/Pages/Home/Home.jsx';
import AddProduct from './Component/Product/AddProduct.jsx';
import Question from './Component/Section/Question';
// import Login from './Component/Login/Login';
// import Regester from './Component/Login/Regester';
//import Authprovider from './Component/Provider/Authprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    loader:()=>fetch('/public.json'),
    errorElement: <Errorpage></Errorpage>,
  
  },
    {
      path: "/product",
      element:<AddProduct></AddProduct>,
    },
    {
      path: "/question",
      element:<Question></Question>,
    },
    
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
      <RouterProvider router={router} />
    
)
