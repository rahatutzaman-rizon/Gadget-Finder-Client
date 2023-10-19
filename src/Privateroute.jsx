// import { useContext } from "react";

// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "./Component/Provider/Authprovider";


// const Privateroute = ({children}) => {
//     const {user}=useContext(AuthContext);
//     const location =useLocation();
    
//     if (user){
//        return children  ;
//     }
//     return <Navigate  state={location.pathname} to='/login'  replace></Navigate>
// };

// export default Privateroute;