import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

const Login =() =>{

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
        
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-8">
            <img src="../images/log/log.webp" class="img" alt="1"/>
            </div>
            <div className="col-4">
            <div className="header">
        {/* <div className="icon"> */}
            <img className="icon" src="../images/logo.png" alt="icon"></img>
            <p className="Sign">Login</p>
        </div>
       

        
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
        value="Login"
        />
        
        

        

        </div>
        </div>
        </form>
        
        </>

    );
}
export default Login;