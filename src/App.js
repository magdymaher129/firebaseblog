import React from "react";
import Navbars from "./components/Navbars";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { useState } from "react";
import { UserContext } from "./context/UserContext";
import './App.css'

function App() {

  
    const [name,setName]=useState(null)
  return (
    <div>
      <Router>
        <UserContext.Provider value={{name,setName}}>
        <Navbars />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}>
            {" "}
          </Route>
          <Route path='/contacts' element={<Contacts />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
          </UserContext.Provider>
      </Router>
   
    </div>
 
  );
}

export default App;
