import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState({ success: true, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', formData)
      .then((response) => {
        console.log(response.data);
        setLoginStatus(response.data);
        if (response.data.success) {
          navigate('/Login/Navbar/Dashboard', { state: { username: response.data.username } });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoginStatus({ success: false, message: 'User not found. Please Register' });
      });
  };

  return (
    <>
    <section>
      <div className="container">
      <div class="card cascading-right" style={{background: "hsla(0, 0%, 100%, 0.55)",
            backdropFilter: "blur(30px)",}}
            >

        <div className="login col-lg-2 mb-4 mb-sm-0">
          <h2>Login</h2>
          <div class="card-body p-5 shadow-5 text-center">
          <h2 class="fw-bold mb-5">Sign up now</h2>
          <form onSubmit={handleSubmit}>
          <div class="form-outline mb-4">
                <input type="text"
                      name="username"
                      placeholder="Username"
                      onChange={handleChange} id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">UserName</label>
              </div>

      
              <div class="form-outline mb-4">
                <input type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange} id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>
              <div className="links">
            <a>Forgot Password</a>
            <Link to={{ pathname: "/Login/Register" }}>
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>
              
            </Link>
          </div>
          </form>
        </div>
          {loginStatus.success === false && <p style={{ color: 'red' }}>{loginStatus.message}</p>}
          
        </div>
        <div className='row'>
        <div class="col-lg-8 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 shadow-5"
          alt="" />
      </div>
      </div>
        
      </div>
    </div>   
    </section>         
    </>  
  );
}

export default Login;
