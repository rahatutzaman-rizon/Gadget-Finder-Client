import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

import swal from "sweetalert";
import Navbar from "../Pages/Header/Navbar";

const Regester = () => {
  const {user,createuser}=useContext(AuthContext)
    const handleregester=e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name= form.get("name");
        const email= form.get("emails");
        const password= form.get("password");
        console.log(name,email,password);
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d].{6,20}$/.test(password)) {
          swal('Password must be at least 6 characters long and contain letters and numbers.');
          return;
        }

        createuser(email,password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error=>{
          console.error(error)
        })
    }
    return (
        <div>
   
   <Navbar></Navbar>
        <h2 className="text-3xl text-center">Please Regester here </h2>
    
        <form onSubmit={handleregester}  className="card-body md:w-2/3 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" required name='name' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name='emails' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password"/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Regester</button>
        </div>
      </form>

      <p className="text-center my-2">already regesterd<Link to="/login"><span className="ml-4 link link-hover text-blue-500">login page</span></Link></p>
</div>
    );
};

export default Regester;