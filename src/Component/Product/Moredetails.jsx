import { useLoaderData } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";


const Moredetails = () => {
    const more=useLoaderData()
    console.log(more)
    const {name,brand,rating,category,description,photo,price}=more
    const moreproduct={
        name,brand,rating,category,description,photo,price
    }
    const handleCart=()=>{
        fetch("https://technovative-store-server-6avhjdwj7-redwan-525s-projects.vercel.app/cart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(moreproduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        



    }
    return (
      <>
      <div>
        <Navbar></Navbar>
      </div>
<div>
<div className="card card-compact w-96 bg-base-100 shadow-xl ml-96 my-6">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <p className="text-2xl"> Name :{name}</p>
    <div className="card-actions justify-end">
    <div>
      <h2> Reliable technology ensures that the brands products and services have a longer life span</h2>
     <h1>Description :{description}</h1>
     <h3 className="bg-red-200"> Warenty:2 years</h3>
     <h3 className="bg-pink-200 my-1"> Made in India</h3>
     <h3 className="bg-orange-200 my-1"> rating:{rating}</h3>
     <h3 className="bg-blue-200">category{category} </h3>
    </div>
       <button onClick={handleCart} className="btn btn-outline btn-error">
       
      add to cart
      </button>
    </div>
  </div>
</div>
           
        </div>

      </>
        
    );
};

export default Moredetails;