import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Category.css';
import CategoryData from '../Data/CategoryData';

const Category = () =>{

    return(
        <>
        <p className="mainHeader">Browse items by Category</p>
        <div className="container-1">
            {CategoryData.map((val , index) => {
            
                return ( 
                <div key={index} className="item">
                
        
                <Link className="cat" to ={val.url}>
                    <div className="row" >
                        <div className="col-4">
                            <img className="Cimg" src={val.image}  alt="image"/>
                        
                        </div>
                        <div className="col-8">
                            
                            <h4>{val.itemName}</h4>
                            <p>{val.adds} ads</p>
                            </div>     
                    </div>
                    </Link>
                </div>
                )
            
       
        })}

       </div>
        
       </>

    );
}
export default Category;