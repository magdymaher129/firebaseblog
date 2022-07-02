import {auth,signInWithEmailAndPassword}from './firebase-config'
import { useState } from 'react';

const Signin = async (loginEmail,loginPassword) => {
    const [name,setName]=useState("")
   
    const user=await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(()=>{
      setName(auth.currentUser.displayName)}).catch(err => console.log(err.message))
  

    console.log(auth.currentUser.displayName)
  
 
};