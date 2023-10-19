import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";



import Navbar from "../Pages/Header/Navbar";
import { AuthContext } from "../Provider/Authprovider";





const Login = () => {
const {signin,googleSignIn}=useContext(AuthContext);
const location=useLocation();
console.log(location.pathname);
const navigate=useNavigate()

const handlegoogle=()=>{
  googleSignIn()
  .then((result) => {
    const user = result.user;
    navigate(location?.state?location.state:'/')
    console.log(user)}
   
    )};


    const handlelogin=e =>{
        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        
        
        const email= form.get("emails");
        const password= form.get("password");
        console.log(email,password);


        signin(email,password)
        .then(result=>{
          console.log(result)
          navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
          console.error(error)
        })
    }
    return (
        <div>
        <Navbar></Navbar>
      
        <h2 className="text-3xl text-center">Please login</h2>
    
        <form onSubmit={handlelogin}  className="card-body md:w-2/3 lg:w-1/2 mx-auto">
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
          <button  className="btn btn-primary">Login</button>
        </div>
      </form>

      <p className="text-center my-2">Dont have a accobrt <Link to="/regester"><span className=" link link-hover text-blue-500">regester</span></Link></p>
      <button onClick={handlegoogle}  className="my-2 bg-blue-600 ml-96 text-center text-white font-bold py-2 px-4 rounded">Google Login</button>
</div>
        
    );
};

export default Login;