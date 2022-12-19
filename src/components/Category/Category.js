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
        url:"/computers",
    },

    {
        id:2,
        itemName:"Cosmetics",
        adds:4,
        image:"./images/Category/2.png",
        url:"/cosmetics",
    },

    {
        id:3,
        itemName:"Costumes",
        adds:"4",
        image:"./images/Category/3.png",
        url:"/costumes",
    },

    {
        id:4,
        itemName:"Electronics",
        adds:"4",
        image:"./images/Category/4.png",
        url:"/electronics",

    },

    {
        id:5,
        itemName:"Pets",
        adds:"4",
        image:"./images/Category/5.png",
        url:"/pets",
    },

    {
        id:6,
        itemName:"Shoes",
        adds:"4",
        image:"./images/Category/6.png",
        url:"/shoes",
    },

    {
        id:7,
        itemName:"Phones",
        adds:"4",
        image:"./images/Category/7.png",
        url:"/phones",
    },

    {
        id:8,
        itemName:"Toys",
        adds:"4",
        image:"./images/Category/8.png",
        url:"toys",
    },

    {
        id:9,
        itemName:"Handicrafts",
        adds:"4",
        image:"./images/Category/9.png",
        url:"handicrafts",
    },

    {
        id:10,
        itemName:"kitchenware",
        adds:"4",
        image:"./images/Category/10.png",
        url:"kitchenwares",
    },

    {
        id:11,
        itemName:"Gift",
        adds:"4",
        image:"./images/Category/11.png",
        url:"gifts"
    },

    {
        id:12,
        itemName:"Stationary",
        adds:"4",
        image:"./images/Category/12.png",
        url:"stationaries"
    },
];




    return(
        <>
        <p className="mainHeader">Browse items by Category</p>
        <div className="container-1">
            {Categoryitems.map((val , index) => {
            
                return ( 
                <div key={index} className="item">
                
        
                <Link className="cat" to ={val.url}>
                    <div className="row" >
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