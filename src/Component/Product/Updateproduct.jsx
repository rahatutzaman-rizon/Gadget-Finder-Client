import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updateproduct = () => {
    
   

    const item=useLoaderData();
    console.log(item);
   
   
   const {_id,name,brand,rating,category,description,photo,price}=item;
       const handleUpdateProduct = event => {
           event.preventDefault();
   
           const form = event.target;
   
           const name = form.name.value;
           const price = form.price.value;
           const brand = form.brand.value;
           const photo = form.photo.value;
           const category = form.category.value;
           const description = form.description.value;
           const rating = form.rating.value;
   
           const updateproductitem = { name, brand,rating,description, category,photo,price }
   
           console.log(updateproductitem);
   
           // send data to the server
           fetch(`https://technovative-store-server-6avhjdwj7-redwan-525s-projects.vercel.app/product/${_id}`, {
               method: 'PUT',
               headers: {
                   'content-type': 'application/json'
               },
               body: JSON.stringify(updateproductitem)
           })
               .then(res => res.json())
               .then(data => {
                   console.log(data);
                   if(data.modifiedCount > 0){
                       Swal.fire({
                           title: 'Success!',
                           text: 'Product update  Successfully',
                           icon: 'success',
                           confirmButtonText: 'Cool'
                         })
                   }
               })
       }
   

   
    return (
        <div className="bg-orange-200 p-24 py-2">
        
        <h2 className="text-3xl font-extrabold">Update Product</h2>
        <form onSubmit={handleUpdateProduct}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                    <select name="brand"  defaultValue={brand}>

                        <option value="hp">Hp</option>
                        <option value="xiaomi">xiaomi</option>
                        <option value="samsung">Samsung</option>
                        <option value="apple">Apple</option>
                        <option value="vivo">Vivo</option> <option value="sony">Sony</option>
                    </select>
                        {/* <input type="text" name="brand" placeholder="Brand  Name" className="input input-bordered w-full" /> */}
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description"  defaultValue={description} placeholder="Short description" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="number"  name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo"  defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update Product" className="btn btn-block" />

        </form>
    </div>
    );
};

export default Updateproduct;