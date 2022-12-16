import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import Navbar from "../NavigationBar/Navbar";

const Register = () =>{



const [data, setData] = React.useState();

const handleSubmit = (event) =>{
    console.log(data);
    event.preventDefault();
}

const handleChange = (event) =>{
    setData({
        ...data,
        [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value


    })
}

    return (

        <>
        <Navbar size={0}/>
        <form onSubmit={handleSubmit}>
            <div className="Register">
                <div className="col-6">
        
        <div className="header">
        {/* <div className="icon"> */}
            <img className="icon" src="../images/logo.png" alt="icon"></img>
            <p className="Signu">Sign Up</p>
        </div>
        <input 
        className="inputFeild"
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        />

        <input 
        className="inputFeild"
        type="text"
        name="secondName"
        placeholder="Second Name"
        onChange={handleChange}
        />
        <br/>

        <input 
        className="inputFeild"
        id="email"
        type="text"
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        />

        <br/>

        <input 
        className="inputFeild"
        id="email"
        type="text"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        />

        <br/>
        
        <div className="agree">
        <input 
        className="inputFeild"
        type="checkbox"
        name="agree"
        onChange={handleChange}
        />

        <p>I have carefully read terms and conditions <br/> and agree to those conditions</p>
        </div>

        <br/>

        <input 
        type="submit"
        name="submit"
        id="signUp"
        value="Sign Up"
        />
        
        <Link to="/login"><p>Already have an account? Sign in</p></Link>

        </div>
        
        </div>

        </form>

        


        
        
        
        </>

    );
}
export default Register;