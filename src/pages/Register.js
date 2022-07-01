import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase-config";

function Register() {
  //------------------------------------

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const register = async (email, password, name) => {
    const User = await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, { displayName: name });
      })
      .catch((err) =>
        console.log(err.message).finally(() => setUser(auth.currentUser)),
      );
    console.log(name);
    setName("");
    setEmail("");
    setPassword("");
  };
  //------------------------------------

  return (
    <div className='loginPage reg grey'>
      <h1 style={{ marginBottom: "60px" }}>Sign Up</h1>
      <label htmlFor='name' style={{ position: "relative", left: "-70px" }}>
        Name :
      </label>
      <input
        type='text'
        placeholder='Enter your Name'
        className='reg-email'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor='email' style={{ position: "relative", left: "-40px" }}>
        Email Address :
      </label>
      <input
        type='email'
        placeholder='Enter email address'
        className='reg-email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor='password' style={{ position: "relative", left: "-60px" }}>
        Password :
      </label>
      <input
        type='password'
        placeholder='Enter password'
        className='reg-password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        className='reg-btn blue'
        onClick={() => register(email, password, name)}
      >
        Sign up
      </button>
    </div>
  );
}

export default Register;
