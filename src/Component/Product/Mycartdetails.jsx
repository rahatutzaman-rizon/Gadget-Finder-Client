import { Link } from "react-router-dom";


const Mycartdetails = ({cart}) => {
    const {name,brand,photo}=cart
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brand}</h2>
    <p>{name}</p>
    <div className="card-actions">
      <button className="btn btn-primary">
      <Link to='/'>HOME</Link>
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Mycartdetails;