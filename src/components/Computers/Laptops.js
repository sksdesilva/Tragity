import React from "react";
import CommonCatalog from "../CommonCatalog/CommonCatalog";
import '../../App.css';
import RDButton from "../ItemColours/RDButoon";
import MainButton from "../MainButton/MainButton";
import Cart from "../CommonCatalog/Cart/Cart";
import NewCatalog from "../CommonCatalog/NewCatalog";
import Navbar from "../NavigationBar/Navbar";
import { useState } from "react";
import LaptopsData from "../Data/LaptopsData";





const Electronics = () =>{

  

    
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
        
        <p className="headerName">Laptops</p>

        {
      show ? <div className="container-2">
      {LaptopsData.map((value) => {
          return(
              
              <NewCatalog 
              key={value.id}
              value={value}
              addCart={addCart}
              
              />  
          )
      })}
                </div>  : <Cart cart={cart} setCart={setCart} addCart={addCart} setShow={setShow} updateItems={updateItems}   />
        }

    {
        warning && <div className="warning">Item is already added</div>
    }


       </>

    );
}

export default Electronics;