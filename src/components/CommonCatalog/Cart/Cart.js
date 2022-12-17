
import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './Cart.css';

const Cart = ({cart,setCart,setShow}) =>{
    const [price , setPrice] = useState(0);
    return(

        <>
        <button className="backbtn" onClick={()=>setShow(true)}>Back to Category</button>
        <article>
            
            {
                cart?.map((value)=>(
                    <div className="row">
                        
                    <div className = "col-7" key={value.id}>
                        <div className="cart_img">
                            <img src={value.image}/>
                            <p>{value.name}</p>
                            </div>
                        </div>
                        <div className="col-5">
                        <div>
                            <button>+</button>
                            <span>{value.price}$</span>
                            <br/>
                            <button>-</button>
                            <button id="bt1">Remove</button>
                            
                           
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