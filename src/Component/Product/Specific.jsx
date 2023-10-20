import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import SpecificCard from "./SpecificCard";
import Navbar from "../Pages/Header/Navbar";
import logo1 from './i.jpeg'; 
import logo2 from './i2.png'; 
import logo3 from './i3.jpeg'; 


const Specific = () => {
    const specificbrand=useLoaderData();
    const {id}=useParams();
    const [brands,setBrands]=useState();

     
     
   
  
    useEffect(()=>{
        const findBrand = specificbrand?.filter(data => data.brand.toLowerCase() == id)
         setBrands(findBrand);
     },[id,specificbrand]);
     console.log(brands);

    //  const {rating,category,description,photo,price}=brands;

    // useEffect(()=>{
    // fetch('http://localhost:5000/product')
    // .then(res=>res.json())
    // .then(data=>setProducts(data))
    // },[])

    // console.log(products);


    // const filterProduct = products.filter(product => product.brand===specificbrand.bname);
    // setProducts(filterProduct);
    // console.log(filterProduct)
    return (

        
     <div>
    <Navbar></Navbar>
    <h3 className="text-center text-4xl">Specific brand </h3>
    <div>
    <div className="carousel w-5/6 ml-48">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={logo1}
     className=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={logo3}  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={logo2} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
    </div>
    <h2 className="my-4 mb-4 text-3xl text-center">Poduct show:</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {
    brands?.map((item,idx)=><SpecificCard key={idx} item={item}></SpecificCard>)
 }
    </div>
 


     </div> 

    );
};

export default Specific;