
import { getValue } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';

import './Cart.css';

const Cart = ({cart,setCart,setShow,updateItems}) =>{
    const [price , setPrice] = useState(0);

    

    const generatePrice = () =>{
        let ans = 0;
        
        cart.map((value)=>(
            ans += value.price * value.amount
        ))
        setPrice(ans);
    }

    const removeItem = (id) =>{
        const array = cart.filter((value)=>value.id !== id);
        setCart(array);
        
    }

    useEffect(()=>{
        generatePrice();
    })

    return(

        <>
        <button className="backbtn" onClick={()=>setShow(true)}>Back to Category</button>
        <article>
            
            {
                cart?.map((value,index)=>(
                    <div className="row">
                        
                    <div className = "col-7" key={index}>
                        <div className="cart_img">
                            <img src={value.image}/>
                            <p>{value.name}</p>
                            </div>
                        </div>
                        <div className="col-5">
                        <div>
                            <button onClick={()=>updateItems(value,+1)}>+</button>
                            
                            <button>{value.amount}</button>
                            <button onClick={()=>updateItems(value,-1)}>-</button>
                            <span>{value.price}$</span>
                            <button id="bt1" onClick={()=>removeItem(value.id)}>Remove</button>
                            
                           
                        </div>
                        
                        <div>
                       
                            
                            
                            </div>
                        </div>
                        <hr/>
                        </div>
                        
                     


                ))}
            
            <div className="tAmount">
                <span id ="pdescription">Total Price</span>
                <span id="price">{price}$</span>
            </div>
        </article>
        </>
        )
        }

        
    




    

export default Cart;