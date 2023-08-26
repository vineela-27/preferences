import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';
import * as TbIcons from 'react-icons/tb';
import * as BsIcons from 'react-icons/bs';
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            
            <span></span>
            <span></span>
            PANACE.AI
            <i className="fas fa-code"></i>
          </NavLink>
          
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                exact
                to="/Login/Searchbar"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <BsIcons.BsSearch />
            
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login/Home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <AiIcons.AiFillHome />
            
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login/Reports"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <FaIcons.FaCartPlus />
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login/profile"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <CgIcons.CgProfile />
                profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <MdIcons.MdOutlineLogout />
                logout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <TbIcons.TbShieldHeart />
                team@3
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
