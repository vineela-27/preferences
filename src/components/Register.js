import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
function Register() {
  return (
    <div class="loginform">
    <div class="square">
        <i style={{"--clr":"#00ff0a"}}></i>
        <i style={{"--clr":"#ff0057"}}></i>
        <i style={{"--clr":"#fffd44"}}></i>
        <div class="login">
            <h2>Signup With</h2>
            <h2> PANACE.AI</h2>
            <div class="inputBx">
                <input type="text" placeholder="Username"/>
            </div>
            <div class="inputBx">
                <input type="email" placeholder="Email"/>
            </div>
            <div class="inputBx">
                <input type="text" placeholder="Height"/>
            </div>
            <div class="inputBx">
                <input type="text" placeholder="Age"/>
            </div>
            <div class="inputBx">
                <input type="password" placeholder="Password"/>
            </div>
            <div class="inputBx">
              <Link to={{pathname:"/Login/Home"}}>
              <input type="submit" placeholder="Sign up"/>
              </Link>
                
            </div>
            <div class="links">
            <a>already had an account?</a>
            <Link to={{pathname:"/Login"}}>
            <button style={{'font-size':'20px'}}>Login</button>
            </Link>
            </div>
        </div>
    </div>
    </div>
    // <div className='Login'>
      
    //   <Link to={{pathname:"/Login/Navbar"}}>
    //     <button> login </button>
    //   </Link>
    // </div>
  );
}

export default Register;
