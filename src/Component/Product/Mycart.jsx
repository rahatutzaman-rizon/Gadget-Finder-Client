import { useLoaderData } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";

const Mycart = () => {
    const cartitem=useLoaderData();
    console.log(cartitem)
    return (
    
        <div>
            <Navbar></Navbar>
        </div>
    );
};

export default Mycart;