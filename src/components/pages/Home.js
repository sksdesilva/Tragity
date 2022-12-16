
import '../../App.css'
import Category from "../Category/Category";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../CommonCatalog/Cart/Cart';
import Costumes from '../Costumes/Costumes';
import Navbar from '../NavigationBar/Navbar';
import Footer from '../Footer/Footer';


const Home = () => {
  const[show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);



  return (
    
    <>
    <Navbar size={cart.length} setShow={setShow}/>
    <Category/>
  
    
   
</>
    );
}
export default Home;