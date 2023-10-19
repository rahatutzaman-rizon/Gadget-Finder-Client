import { Link } from "react-router-dom";


const Brands = ({brand}) => {
  const {id,bname,image}=brand || {};
    return (
        <div>
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <Link to={`/specific/${id}`}>
          
  <img src={image} alt="Brand Logo" className="w-full h-40 object-cover"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{bname}</div>
  </div>
          </Link>
</div>

        </div>
    );
};

export default Brands;