import React from "react";
import "./nevbar.scss";
import logo from "../Images/Frame 760.png";
// import bgimg from "../Images/BG IMAGE.png";

import cart from "../Images/cart.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faBars,faUser } from '@fortawesome/free-solid-svg-icons'

// window.onscroll =()=>console.log(window.pageYOffset)
export default function Nevbar() {
    




  return (
    <>
      <header className="header-nevigation-bar">
      <input type="checkbox" name="so" id="so" />
        <label htmlFor="so">
        <FontAwesomeIcon icon={faBars} className="side-bar-icon"/>
        </label>
        <span>
          <img className="logo-header" src={logo} alt="logo" />
        </span>
       
          <ul className="sidebar">
            <li>Browse games</li>
            <li>About us</li>
            <li>How to sell</li>
            <li>Contact us</li>
            <li>
              <select name="GBP" id="">
                <option value="GBP">GBP</option>
              </select>
            </li>
            <li>
             <FontAwesomeIcon icon={faUser}/>
            </li>
          </ul>
       
        <span>
          <img className="cart-iicon" src={cart} alt="card" />
        </span>
      </header>
    </>
  );
}
