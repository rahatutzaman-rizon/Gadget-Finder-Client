import { useLoaderData } from "react-router-dom";


const Moredetails = () => {
    const more=useLoaderData()
    console.log(more)
    const {name,brand,rating,category,description,photo,price}=more
    const moreproduct={
        name,brand,rating,category,description,photo,price
    }
    const handleCart=()=>{
        fetch("http://localhost:5000/cart", {
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
        <div>
            <h2>more{more.name} </h2>
            <h3>{more.brand}</h3>
            <button onClick={handleCart} className="btn btn-outline btn-error">
       
      add to cart
      </button>
        </div>
    );
};

export default Moredetails;