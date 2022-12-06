import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Category.css'

const Category = () =>{


const Categoryitems = [
    {
        id:1,
        itemName:"Computers",
        adds:4,
        image:"./images/Category/1.png",
    },

    {
        id:2,
        itemName:"Cosmetics",
        adds:4,
        image:"./images/Category/2.png",
    },

    {
        id:3,
        itemName:"Costumes",
        adds:"4",
        image:"./images/Category/3.png",
    },

    {
        id:4,
        itemName:"Electronics",
        adds:"4",
        image:"./images/Category/4.png",
    },

    {
        id:5,
        itemName:"Pets",
        adds:"4",
        image:"./images/Category/5.png",
    },

    {
        id:6,
        itemName:"Shoes",
        adds:"4",
        image:"./images/Category/6.png",
    },

    {
        id:7,
        itemName:"Phones",
        adds:"4",
        image:"./images/Category/7.png",
    },

    {
        id:8,
        itemName:"Toys",
        adds:"4",
        image:"./images/Category/8.png",
    },

    {
        id:9,
        itemName:"Handicrafts",
        adds:"4",
        image:"./images/Category/9.png",
    },

    {
        id:10,
        itemName:"kitchenware",
        adds:"4",
        image:"./images/Category/10.png",
    },

    {
        id:11,
        itemName:"Gift",
        adds:"4",
        image:"./images/Category/11.png",
    },

    {
        id:12,
        itemName:"Stationary",
        adds:"4",
        image:"./images/Category/12.png",
    },
];




    return(
        <>
        <h3>Browse items by Category</h3>
        <div className="container-1">
            {Categoryitems.map((val , index) => {
                return ( 
                <div className="item">
        
                <Link class="cat" to ="/aboutus">
                    <div className="row">
                        <div className="col-4">
                            <img className="Cimg" src={val.image}  alt="image"/>
                        </div>
                        
                        <div className="col-8">
                            <h4>{val.itemName}</h4>
                            <p>{val.adds} ads</p>
                            </div>     
                    </div>
                    </Link>
                </div>
                )
            
       
        })}

       </div>
        
       </>

    );
}
export default Category;