import React from "react";
import './Navbar.css';

const Navbar = ()=>{
    return (
        <>
        <nav className="navbar">
            <div className="navbar-left">
            <a href = "/" className="logo">
            TyrePlex
            </a>
            </div>
            
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href ="/" >CarTyres</a>
                    </li>
                    <li>
                        <a href ="/" >BikeTyres</a>
                    </li>
                    <li>
                        <a href ="/" >TyrePressure</a>
                    </li>
                    <li>
                        <a href ="/" >CommercialTyres</a>
                    </li>
                    <li>
                        <a href ="/" >Accessories</a>
                    </li>
                    <li>
                        <a href ="/" >More</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
             <span className="cart-count">0</span>
              </a>
             <a href="/account" className="user-icon">
               <i className="fas fa-user"></i>
               </a>
            </div>
        </nav>
        </>
    )
}
export default Navbar;