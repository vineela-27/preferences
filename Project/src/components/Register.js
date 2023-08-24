import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:5000/api/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response.data); 
          
          if (response.data.message.includes('Username already exists')) {
            alert('Username already exists. Please choose a different username.');
          } else {
            alert('User Registered Successfully');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.log(validationErrors);
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const errors = {};

    
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(formData.username)) {
      errors.username = 'Username should only contain alphanumeric characters.';
    }

   
    const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
    if (!passwordRegex.test(formData.password)) {
      errors.password =
        'Password should be at least 8 characters and contain at least one alphabet, one number, and one lowercase letter.';
    }

    return errors;
  };

  return (
    <>
      <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4">
          <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: "#709085"}}></i>
          <span class="h1 fw-bold mb-0">Logo</span>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: "23rem"}} onSubmit={handleSubmit}>

            <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Signup</h3>

            <div class="form-outline mb-4">
              <input type="username" id="form2Example18" class="form-control form-control-lg" name='username' value={formData.username} onChange={handleChange}  />
              {errors.username && <span className="error">{errors.username}</span>}
              <label class="form-label" for="form2Example18">Username</label>
            </div>

            <div class="form-outline mb-4">
              <input name="email"
                value={formData.email}
                onChange={handleChange} 
                type='email'
                id="form2Example28" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example28">Email</label>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div class="form-outline mb-4">
              <input type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="form2Example28" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example28">Password</label>
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            
            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button">Signup</button>
            </div>

          </form>

        </div>
        <div className="links">
            <a>Already have an account?</a>
            <Link to={{ pathname: "/Login" }}>
              <button style={{ fontSize: '20px' }}>Login</button>
            </Link>
          </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
          alt="Login image" class="w-100 vh-100" style={{objectFit: "cover", objectPosition: "left"}}/>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Register;
