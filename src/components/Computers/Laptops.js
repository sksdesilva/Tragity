import React from "react";
import CommonCatalog from "../CommonCatalog/CommonCatalog";
import '../../App.css';
import RDButton from "../ItemColours/RDButoon";
import MainButton from "../MainButton/MainButton";
import { Link } from "react-router-dom";
import { ReactDOM } from "react-dom/client";




const Laptops = () =>{

    const Laptopss = [
        {
            id:1,
            brand:"ASUS",
            name:"ASUS VIVOBOOK 15",
            description:"8 GB RAM , 1GB SSD",
            price:"200",
            image:"./images/Computers/V1.jpg",
        },

        {
            id:2,
            brand:"DELL",
            name:"DELL INSPIRON 3502",
            description:"8 GB RAM , 128GB SSD",
            price:"150",
            image:"./images/Computers/D1.jpg",
        },

        {
            id:3,
            brand:"Asus",
            name:"ASUS ZENBOOK 14",
            description:"8 GB RAM , 128GB SSD",
            price:"175",
            image:"./images/Computers/V1.jpg",
        },

        {
            id:4,
            brand:"Dell",
            name:"DELL VOSTRO 3510",
            description:"8 GB RAM , 128GB SSD",
            price:"165",
            image:"./images/Computers/D4.jpg",
        },

    ];

    
    return(
        <>
       

        
            {/* {Laptopss.map((value , index) => {
                return ( 
                   <CommonCatalog
                   brand = {value.brand}
                   name = {value.name}
                   description = {value.description}
                   price = {value.price}
                   />


                   

                   
                   
                   
                   
                   
                  
                   
              
                )
            
       
        })} */}
         <p className="headerName">Laptops</p>
        <div className="container-2">
            {Laptopss.map((val , index) => {
                return ( 
                <div className="border-3">
                    <div className="headline">
                            <h5><b>{val.name}</b></h5>
                            </div>
                            <img className="subItemImage" src={val.image}  alt="imag"/>
                        <div className="sub-container">
                         
                            <p style={{color:"lightblue"}}>{val.name}</p>
                            <p>{val.description}</p>
                            <p style={{color:"red"}}>{val.price}$</p>
                            <div className="rowB">
    </div>
                            <MainButton/>
                            </div>     
                </div>
                )
        })}

       </div>

        


        
       </>

    );
}

export default Laptops