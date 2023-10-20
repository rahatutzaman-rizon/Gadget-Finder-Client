import { useLoaderData } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import Mycartdetails from "./Mycartdetails";

const Mycart = () => {
    const cartitem=useLoaderData();
    console.log(cartitem)
    return (
    <div>
<div>
            <Navbar></Navbar>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 gap-8 my-4 py-10 ml-4 mr-4'>
            {
                cartitem.map((cart)=>
            <Mycartdetails
            key={cart._id}
            cart={cart}> </Mycartdetails>)
            
            }
       </div>
        </div>
        
        
    );
};

export default Mycart;