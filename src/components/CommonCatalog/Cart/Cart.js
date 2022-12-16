
import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './Cart.css';

const Cart = ({cart,setCart,setShow}) =>{
    const [price , setPrice] = useState(0);
    return(

        
        <article>
            <button onClick={()=>setShow(true)}>Back to Category</button>
            {
                cart?.map((value)=>(
                    <div className = "cart_box" key={value.id}>
                        <div className="cart_img">
                            <img class = "cartimg"src={value.image}/>
                            <p>{value.name}</p>
                        </div>
                        <div>
                            <button>+</button>
                            <button>-</button>
                        </div>
                        <div>
                            <span>{value.price}</span>
                            <button>Remove</button>
                        </div>
                        </div>


                ))}
            
            <div>
                <span>Total Price</span>
                <span>{price}$</span>
            </div>
        </article>
        )
        }

        
    




    

export default Cart;