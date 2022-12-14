import React, { useState } from "react";
import NewCatalog from "../CommonCatalog/NewCatalog";
import CommonCatalog from "../CommonCatalog/CommonCatalog";
import '../../App.css';
import RDButton from "../ItemColours/RDButoon";
import MainButton from "../MainButton/MainButton";






const Costumes = () =>{

    const Costumes = [
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

        {
            id:5,
            brand:"Dell",
            name:"DELL VOSTRO 3510",
            description:"8 GB RAM , 128GB SSD",
            price:"165",
            image:"./images/Computers/D4.jpg",
        },

        

    ];

    const [cart,setCart] = useState([]);

    const updateCart = (value) =>{
        cart.push(value);
        console.log(cart);
    };
    
    
    return(
        <>
        <p className="headerName">Costumes</p>
        <div className="container-2">
        {Costumes.map((value) => {
            return(
                
                <NewCatalog 
                key={value.id}
                value={value}
                updateCart={updateCart}
                />
               
            )
        })}
 </div>
       

       </>

    );
}

export default Costumes;