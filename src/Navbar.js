import React from "react";
import {BiSearch} from 'react-icons/bi';
function Navbar(){
    return (
        <nav className="navbar">
            <h2 className="logo">Quote Gallery</h2>
            <div className="search-bar">
                <BiSearch className="search-icon"/>
                <input type="text" placeholder="Search by author..."/>
            </div>
            <ul className="nav-subs">
                <li> <a href="#"> Home </a> </li>
                <li> <a href="#"> Authors </a> </li>
                <li> <a href="#"> About </a> </li>
            </ul>
        </nav>
    );
}

export default Navbar;