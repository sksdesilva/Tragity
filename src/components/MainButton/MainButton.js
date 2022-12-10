import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";

const MainButton = () =>{
    return(
        
        <div className="buyBtton">
        
        <Link to="/buynow">
        <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Buy Now</button>
        </Link>
        
        </div>
        



    );
}
export default MainButton