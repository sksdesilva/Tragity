import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/NavigationBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Categories from './components/pages/Categories';
import Contact from './components/pages/Contact';
import Computers from './components/Computers/Computers';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Costumes from './components/Costumes/Costumes';
import Electronics from './components/Electronics/Electronics';
import Pets from './components/Pets/Pets';
import Shoes from './components/Shoes/Shoes';
import Phones from './components/Phones/Phones';
import Toys from './components/Toys/Toys';
import Handicrafts from './components/Handicrafts/Handicrafts';
import Kitchenware from './components/Kithchenware/Kitchenware';
import Gifts from './components/Category/Gifts/Gifts';
import Stationaries from './components/Stationaries/Stationaries';
import BuyNow from './components/BuyNow/BuyNow';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/contact" element={<Contact/>}/>

    <Route path="/computers" element={<Computers/>}/>
    <Route path="/cosmetics" element={<Cosmetics/>}/>
    <Route path="/costmes" element={<Costumes/>}/>
    <Route path="/electronics" element={<Electronics/>}/>
    <Route path="/pets" element={<Pets/>}/>
    <Route path="/shoes" element={<Shoes/>}/>
    <Route path="/phones" element={<Phones/>}/>
    <Route path="/toys" element={<Toys/>}/>
    <Route path="/hansicrafts" element={<Handicrafts/>}/>
    <Route path="/kitchenwares" element={<Kitchenware/>}/>
    <Route path="/gifts" element={<Gifts/>}/>
    <Route path="/stationaries" element={<Stationaries/>}/>
    <Route path="/buynow" element={<BuyNow/>}/>
    </Routes>

    <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
