import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../images/LOGO.svg'


const Navbar = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    
             
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src={Logo} className ="logo" alt=""/> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
          <li className="nav-item">
              <NavLink activeClassName='menu_active' className="nav-link" to="/home">
                  Home
                  </NavLink>
            
            </li>
            <li className="nav-item">
              <NavLink activeClassName='menu_active' className="nav-link" to="/services">
                  Services
                  </NavLink>
            
            </li>
            <li className="nav-item">
              <NavLink activeClassName='menu_active' className="nav-link" to="/about">
                  About
                  </NavLink>
            
            </li>
            <li className="nav-item">
              <NavLink activeClassName='menu_active' className="nav-link" to="/contact">
                  Contact
                  </NavLink>
            
            </li>

            
            
          </ul>
          
        </div>
      </nav>
      </div>
            </div>
        </div>
        
       </> 
    )
}

export default Navbar;