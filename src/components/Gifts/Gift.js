import React from "react";
import CommonCatalog from "../CommonCatalog/CommonCatalog";
import Cart from "../CommonCatalog/Cart/Cart";
import NewCatalog from "../CommonCatalog/NewCatalog";
import Navbar from "../NavigationBar/Navbar";
import { useState } from "react";

const Gift = () =>{

    const Gift = [
        {
            id:1,
            brand:"ASUS",
            name:"ASUS VIVOBOOK 15",
            description:"8 GB RAM , 1GB SSD",
            price:"200",
            image:"./images/Computers/V1.jpg",
            amount:1,
        },

        {
            id:2,
            brand:"DELL",
            name:"DELL INSPIRON 3502",
            description:"8 GB RAM , 128GB SSD",
            price:"150",
            image:"./images/Computers/D1.jpg",
            amount:1,
        },

        {
            id:3,
            brand:"Asus",
            name:"ASUS ZENBOOK 14",
            description:"8 GB RAM , 128GB SSD",
            price:"175",
            image:"./images/Computers/V1.jpg",
            amount:1,
        },

        {
            id:4,
            brand:"Dell",
            name:"DELL VOSTRO 3510",
            description:"8 GB RAM , 128GB SSD",
            price:"165",
            image:"./images/Computers/D4.jpg",
            amount:1,
        },

        

    ];

   
    const[show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const addCart = (value) =>{
        let isPresent = false;
        cart.forEach((product)=>{
          if(value.id === product.id)
          isPresent=true;
        })
          if (isPresent){
              setWarning(true);
              setTimeout(()=>{
                setWarning(false);
              },1500);
              return;
          }
          setCart([...cart, value]);
    
      }

      const updateItems = (value,operation) =>{
        let inde = -1;
        cart.forEach((data, index)=>{
            if(data.id === value.id)
            inde = index; 
        });
        const tempArr = cart;
        tempArr[inde].amount += operation;
        if((tempArr[inde]===0))
        tempArr[inde].amount = 1;
        setCart([...tempArr])
      }
    
    

    
    
    
    return(
        
        <>
        <Navbar size={cart.length} setShow={setShow}/>
        <p className="headerName">Gifts</p>
        

        {
      show ? <div className="container-2">
      {Gift.map((value) => {
          return(
              
              <NewCatalog 
              key={value.id}
              value={value}
              addCart={addCart}
              />  
          )
      })}
                </div>  : <Cart cart={cart} setCart={setCart} addCart={addCart} setShow={setShow} updateItems={updateItems}  />
        }

    {
        warning && <div className="warning">Item is already added</div>
    }

        
       
                </>       
    );
    
}

export default Gift;