import { createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../Firebase/Firebase.config";



export  const AuthContext =createContext(null);




const Authprovider = ({children}) => {
    const auth = getAuth(app)
// console.log(auth)
const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createuser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,provider)
       }
       

    const signin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

     const logout= ()=>{
        setLoading(true);
        return signOut(auth);
     }
    useEffect(() =>{
      const unsubscribe=  onAuthStateChanged(auth,currentuser=>{
            console.log("user log in",currentuser);
            setUser(currentuser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
      
        
    },[])



    

    
 const authinfo={
    user,createuser,logout,signin,loading,googleSignIn
 }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;