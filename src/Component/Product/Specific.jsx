import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";


const Specific = () => {
    const [brands,setBrands]=useState();

     const {}=brands
     const {id}=useParams();
    const specificbrand=useLoaderData();
  
    useEffect(()=>{
        const findBrand = specificbrand?.filter(data => data.brand.toLowerCase() == id)
         setBrands(findBrand);
     },[id,specificbrand])
     console.log(brands,id,specificbrand)

    

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
            {/* <h2>show all products {products}</h2> */}
        </div>
    );
};

export default Specific;