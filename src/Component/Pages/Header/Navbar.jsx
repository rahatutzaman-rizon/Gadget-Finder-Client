
//import { useContext } from "react";


import {  NavLink } from "react-router-dom";
//import { AuthContext } from "../../Provider/Authprovider";

const Navbar = () => {
//const {user,logout}=useContext(AuthContext)
// console.log(user)

// const handlelogout=()=>{
//   logout().then()
// }
    const navlinks=<>
        <li><NavLink to='/'>Home</NavLink></li>
        
        <li><NavLink to='/gallary'>Gallary</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/conference'>Conference</NavLink></li>
        <li><NavLink to='/login'>login</NavLink></li>
        <li><NavLink to='/regester'>Regester</NavLink></li>
    </>
    return (
        <div>
           <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Tech Clock</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         
        </div>
      </label>
      {/* { 
        user &&(
          <button onClick={handlelogout} className="btn btn-success">logout</button>
        )
      }
  
  <p>{user?.email}</p> */}
  </div>
</div>
</div>
       
    );
};

export default Navbar;