import React,{useContext} from "react";
import {Link} from "react-router-dom";
import { UserContext } from "../context/UserContext";


  


const Navbars = () => {
  const {name,setName}=useContext(UserContext )
  return (
  <nav>
  <Link to='/'>Home</Link>
  <Link to='/about'>About</Link>
  <Link to='/contacts'>Contacts</Link>

  <div
    style={{
      position: "relative",
      left: "200px",
      fontSize: "8px",
      fontWeight: "bold",
    }}
  >
    <Link to='/Register'>Sign UP</Link>
    
    {name?<Link to='/Logout'>Logout</Link>: <Link to='/Login'>Login</Link>}
  {console.log(name)}
  </div>
 {name?<h2 style={{position: 'absolute',right:'10px'}}> welcome {name}</h2>:null}
     
</nav>
  );
};

export default Navbars;
