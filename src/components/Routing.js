import React from 'react';
import App from '../App';
import Login from './Login'
import Navbar from './Navbar';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import Products from '../pages/Products';

function Routing() {
  return (
    <>
    <BrowserRouter>
            <Routes>
                <Route path='/' Component={App}/>
                <Route path='/Login' Component={Login}/>
                <Route path='/Login/Register' Component={Register}/>
                <Route path='/Login/Register/Navbar' Component={Navbar}/>
                <Route path='/Login/Navbar' Component={Navbar}/>
                <Route path='/Login/Navbar/Home' Component={Home}/>
                <Route path='/Login/Navbar/Reports' Component={Reports}/>
                <Route path='/Login/Navbar/Products' Component={Products}/>
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default Routing;
