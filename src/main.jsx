import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './Component/Pages/Errorpage.jsx';
import Home from './Component/Pages/Home/Home.jsx';
import AddProduct from './Component/Product/AddProduct.jsx';

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
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
