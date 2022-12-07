import React from "react";
import CommonCatalog from "../CommonCatalog/CommonCatalog";
import '../../App.css';
import RDButton from "../ItemColours/RDButoon";
import MainButton from "../MainButton/MainButton";
import { Link } from "react-router-dom";




const Laptops = () =>{

    const Laptopss = [
        {
            id:1,
            brand:"ASUS",
            name:"ASUS VIVOBOOK PRO 15",
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
         <h3>Laptops</h3>
        <div className="container-2">
            {Laptopss.map((val , index) => {
                return ( 
                <div className="border border-3">
                    <div className="headline">
                            <h5><b>{val.name}</b></h5>
                            </div>
                            <img className="subItemImage" src={val.image}  alt="imag"/>
                        <div className="sub-container">
                         
                            <p>{val.name}</p>
                            <p>{val.description}</p>
                            <p>{val.price}$</p>
                            <RDButton/>
                          
                            <Link to="/buynow">
                            <MainButton/>
                            </Link>
                            
                           
                           
                            </div>     
            
                   
                </div>
                )
            
       
        })}

       </div>

        


        
       </>

    );
}

export default Laptops