import React from 'react'
import { useContext } from 'react'
import Navbars from '../components/Navbars'
import Products from '../components/Products'
import { UserContext } from '../context/UserContext'


function Home() {

  return (
    <div>
    
      <div >
  
         <Products />
      </div>
    
    </div>
  )
}

export default Home