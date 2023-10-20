import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Header/Footer";
import Header from "../Header/Header";
import Brands from "./Brands";
import Question from "../../Section/Question";
import Office from "../Header/Office";




const Home = () => {
    const brands=useLoaderData();
console.log(brands)
    return (
        <div>
        <Outlet></Outlet>
            <Header></Header>
            <h3 className="text-center my-8 mb-4 text-3xl bg-gray-600 text-blue-200">All Brand :</h3>
            <div   className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 gap-8 my-4 py-10 ml-12 mr-12'>
            {
            brands.map((brand)=>
            <Brands
            key={brand.id}
            brand={brand}> </Brands>)
        }

   
</div>
     <Question></Question>
     <Office></Office>
            <Footer></Footer>
        </div>
    );
};

export default Home;