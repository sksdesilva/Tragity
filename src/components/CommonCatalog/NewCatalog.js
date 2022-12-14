import React from "react";


import MainButton from "../MainButton/MainButton";
import '../Category/Category.css'


const NewCatalog = ({value,updateCart}) =>{
    const { id , name, brand , description , price , image} = value;
    return(        
                <>
                
                 
                    <div className="border-3">
                        <div className="headline">
                            <h5><b>{name}</b></h5>
                            </div>
                            <img className="subItemImage" src={image}  alt="imag"/>
                                <div className="sub-container">
                                    <p style={{color:"lightblue"}}>{name}</p>
                                    <p>{description}</p>
                            <p style={{color:"red"}}>{price}$</p>
                            <div className="rowB">
                                </div>
                                   <button onClick={()=>updateCart(value)}>add to cart</button>
                            </div> 
                                            </div>
                                            
                                               </> 
                                              );

                }
             export default NewCatalog;
                
                
                
                        
                                
                

                





