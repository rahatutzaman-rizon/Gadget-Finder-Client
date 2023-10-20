import { useLoaderData } from "react-router-dom";


const Updateproduct = () => {
    const item=useLoaderData();
    console.log(item)
   // const {name,brand,rating,category,description,photo,price}=item;
    return (
        <div>
           name:
        </div>
    );
};

export default Updateproduct;