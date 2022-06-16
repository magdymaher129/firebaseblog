import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Navbar() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create Post</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createpost' element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
