import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
function Login() {
  return (
    <div class="loginform">
    <div class="square">
        <i style={{"--clr":"#00ff0a"}}></i>
        <i style={{"--clr":"#ff0057"}}></i>
        <i style={{"--clr":"#fffd44"}}></i>
        <div class="login">
            <h2>Login</h2>
            <div class="inputBx">
                <input type="text" placeholder="Username"/>
            </div>
            <div class="inputBx">
                <input type="password" placeholder="Password"/>
            </div>
            <div class="inputBx">
              <Link to={{pathname:"/Login/Home"}}>
              <input type="submit" placeholder="Sign in"/>
              </Link>
                
            </div>
            <div class="links">
            <a>Forgot Password</a>
            <Link to={{pathname:"/Register"}}>
            <button style={{'font-size':'20px'}}>Signup</button>
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

export default Login;
