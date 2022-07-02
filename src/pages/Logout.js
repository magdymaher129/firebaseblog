import React,{useContext} from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";



const Logout = () => {
  const {name,setName}=useContext(UserContext)
  const navigate=useNavigate()
  const beLogout = async () => {
    await signOut(auth);
    
    setName(null)
    
 

    navigate('/Login')
  };
  return (
    <div  className='loginPage  '>
    <h1>welcome {name}</h1>
     <button className='reg-btn blue' onClick={beLogout}>Sign Out</button>
    </div>
  )
}

export default Logout