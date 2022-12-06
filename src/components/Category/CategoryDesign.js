import React from "react";
import './Category.css';
import { Link } from "react-router-dom";

 CategoryDesign = (props) =>{
    return(
        <>
        <div className="container-1">
            
        <div className="item">
        
        <Link class="cat" to ="/aboutus">
            <div className="row">
                <div className="col-4">
                    <img class="Cimg" src= {props.image} alt="image"/>
                </div>
                
                <div className="col-8">
                    <h4>{props.itemName}</h4>
                    <p>{props.adds}</p>
                    </div>
                    
                    
            </div>
            </Link>
        </div>
        </div>
        </>




    );

}

export default CategoryDesign;