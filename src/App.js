import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/NavigationBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Categories from './components/pages/Categories';
import Contact from './components/pages/Contact';


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
    </Routes>

    <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
