import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

const Navbar = ({size,setShow}) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
  <div className="container-fluid">
    <img className="logo" src="./images/logo.png" alt="logo"></img>
 
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/aboutUs">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/registration">Registration</Link>
        </li>
        <li className="nav-item">
          
        
          <div className="cart" onClick={()=>setShow(false)}>
            <span>
          <img className="iconCart" src="../images/PNG-icons-Shopping-cart-13png.png" alt="logo"></img>
          </span>
          <span>{size}</span>
          </div>

          
          
        
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      
      
    </div>
  </div>
</nav>


    );
}

export default Navbar;
