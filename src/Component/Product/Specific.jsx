import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import SpecificCard from "./SpecificCard";


const Specific = () => {
    const specificbrand=useLoaderData();
    const {id}=useParams();
    const [brands,setBrands]=useState();

     
     
   
  
    useEffect(()=>{
        const findBrand = specificbrand?.filter(data => data.brand.toLowerCase() == id)
         setBrands(findBrand);
     },[id,specificbrand,brands]);
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
 {
    brands.map((item,idx)=><SpecificCard key={idx} item={item}></SpecificCard>)
 }
     </div> 

    );
};

export default Specific;