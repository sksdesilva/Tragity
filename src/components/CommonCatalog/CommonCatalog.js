import React from "react";


import MainButton from "../MainButton/MainButton";
import '../Category/Category.css'


const CommonCatalog = (props) =>{
    return(        
                <>
                
                 
                    <div className="border-3">
                        <div className="headline">
                            <h5><b>{props.name}</b></h5>
                            </div>
                            <img className="subItemImage" src={props.image}  alt="imag"/>
                                <div className="sub-container">
                                    <p style={{color:"lightblue"}}>{props.name}</p>
                                    <p>{props.description}</p>
                            <p style={{color:"red"}}>{props.price}$</p>
                            <div className="rowB">
                                </div>
                                   <MainButton/>
                            </div> 
                                            </div>
                                            
                                               </> 
                                              );

                }
             export default CommonCatalog;
                
                
                
                        
                                
                

                





