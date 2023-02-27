import React from "react";
import './Header.css';
import Headerbanner from '../pages/Headerbanner'

const Header = () => {
  return (
    <>
    <div className="header-background">
      <nav>
        <div className="logo">
          <h2><span>Uni</span> Resto</h2>
        </div>
        <ul>
          <li className="active">
            <a href="home">Home</a>
          </li>
          <li>
            <a href="menu">Menu</a>
          </li>
          <li>
            <a href="sepecialitis">Sepecialitis</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
        <input type="text" name="name" placeholder="Search....."/>
    
      </nav>
      <Headerbanner/>
      </div>
    </>
  );
};

export default Header;
