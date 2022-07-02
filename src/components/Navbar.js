import React, { useEffect } from "react";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


function Navbar() {


  
  return (
    <Router>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create Post</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>

      
    </Router>
  );
}

export default Navbar;
