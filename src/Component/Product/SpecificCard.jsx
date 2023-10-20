import { Link, useParams } from "react-router-dom";


const SpecificCard = ({item}) => {
  const {id}=useParams();
  console.log(item)
    const {_id,name,brand,rating,category,description,photo,price}=item;
    console.log(name)
    return (
   

        <div>




            <div className="card w-96 bg-base-100 shadow-xl">
  <img src={photo} alt="" />
 
  <div className="card-body ">
   
  <h2 className="text-2xl bg-pink-300 text-center">brand :{brand}</h2>
    <h2 className="card-title">
    {name}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline bg-green-500">{price}</div> 
      <div className="badge badge-outline bg-red-300">rating : {rating}</div>
    

    <div className="flex">
    <button className="btn btn-outline btn-success"> <Link to={`/moredetail/${_id}`}>More details </Link></button>
      <button className="btn btn-outline btn-error">
      <Link to={`/updateproduct/${_id}`}>Update</Link>
      
      </button>
      
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SpecificCard;