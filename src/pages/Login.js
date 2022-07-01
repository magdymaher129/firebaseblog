import React, { useState,useContext,Provider } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase-config";


import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

//----------------------------------------------------

function Login() {


  

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
 
  const [User, setUser] = useState({});

  const navigate=useNavigate()
  const {name,setName}=useContext(UserContext)
  const signin = async () => {
   
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(()=>{setName(auth.currentUser.displayName)})
        
        .catch(err => console.log(err.message))
   

      console.log(auth.currentUser.displayName)
      navigate('/')
     
   
  };
  //----------------------------------------------------
  
  return (
   
    <div className='loginPage reg grey'>
      <h1 style={{ marginBottom: "60px" }}>Login</h1>
      <label htmlFor='email' style={{ position: "relative", left: "-40px" }}>
        Email Address :
      </label>
      <input
        type='email'
        placeholder='Enter email address'
        onChange={(e) => setloginEmail(e.target.value)}
        className='reg-email'
        value={loginEmail}
      />
      <label htmlFor='password' style={{ position: "relative", left: "-60px" }}>
        Password :
      </label>
      <input
        type='password'
        placeholder='Enter password'
        onChange={(e) => setloginPassword(e.target.value)}
        className='reg-password' value={loginPassword}
      />
      <button className='reg-btn blue' onClick={signin}>
        Login
      </button>
     
      
    </div>
   
  );
}

export default Login;