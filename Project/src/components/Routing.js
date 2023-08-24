import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import Products from '../pages/Products';
import Dashboard from '../pages/Dashboard';

function Routing() {
  const [authenticated, setAuthenticated] = useState(false);

  
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/Login/Register" element={<Register />} />
        <Route path="/Login/Register/Navbar" element={<Navbar />} />
        <Route path="/Login/Navbar" element={<Navbar />} />

        <Route
          path="/Login/Navbar/Dashboard"
          element={<Dashboard />}
        />

        <Route path="/Login/Navbar/Home" element={<Home />} />
        <Route path="/Login/Navbar/Reports" element={<Reports />} />
        <Route path="/Login/Navbar/Products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
