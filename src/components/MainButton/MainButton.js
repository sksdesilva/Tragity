import React from "react";
import '../MainButton/MainButton.css';
import { Link } from "react-router-dom";

const MainButton = () =>{
    return(
        
        <div className="buyBtton">
        
        <Link class="buynow" to="/buynow">Add to Cart</Link>
        
        </div>
        



    );
}
export default MainButton