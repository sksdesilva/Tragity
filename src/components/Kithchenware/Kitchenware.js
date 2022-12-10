import React from "react";
import CommonCatalog from "../CommonCatalog/CommonCatalog";

const Kitchenware = () =>{

    const Kitchenware = [
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
        <p className="headerName">Kitchenware</p>
        <div className="container-2">
        {Kitchenware.map((value , index) => {
            return(
                
                <CommonCatalog 
                name={value.name}
                brand={value.name}
                description={value.description}
                price={value.price}
                image={value.image}
                />
               
            )
        })}
 </div>
       

       </>
    );
}
 export default Kitchenware;