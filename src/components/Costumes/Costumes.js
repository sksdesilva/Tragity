import { useState } from 'react';
import NewCatalog from "../CommonCatalog/NewCatalog";
import CommonCatalog from "../CommonCatalog/CommonCatalog";
import '../../App.css';
import RDButton from "../ItemColours/RDButoon";
import MainButton from "../MainButton/MainButton";
import Cart from '../CommonCatalog/Cart/Cart';
import Navbar from '../NavigationBar/Navbar';





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
    

    
    
    
    return(
        
        <>
        <Navbar size={cart.length} setShow={setShow}/>
        <p className="headerName">Costumes</p>
        

        {
      show ? <div className="container-2">
      {Costumes.map((value) => {
          return(
              
              <NewCatalog 
              key={value.id}
              value={value}
              addCart={addCart}
              />  
          )
      })}
                </div>  : <Cart cart={cart} setCart={setCart} addCart={addCart} setShow={setShow}   />
        }

    {
        warning && <div className="warning">Item is already added</div>
    }

        
        
       

       </>

    );
}

export default Costumes;