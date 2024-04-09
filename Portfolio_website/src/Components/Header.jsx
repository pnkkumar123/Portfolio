import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return <>
  <div className="main-contain">
  <h4 className='title'>    <NavLink to="/" >
  Pankaj Kumar | Web Developer
    </NavLink></h4>

 
  <div className="navlinks">

    <NavLink to="/projects" >
       Projects  
    </NavLink>
   
    <NavLink to="/skills" >
        Skills
    </NavLink>
    
    <NavLink to="/contact" >
        Contact
    </NavLink>
    
  </div>
  </div>
  
  </>
}

export default Header