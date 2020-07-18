import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logo from './assets/logo.png';

export default class Navbar extends Component { 
    
    render() {
        return(

            <div class="nav-bar-container">  
           <Link to="/"> <img src={Logo} alt="logo" class="logo"/> </Link>
            <nav>
                <ul>
                    <li><Link to="/About"> About </Link></li>
                    <li><Link to="/Experience"> Experience </Link></li>
                    <li><Link to="/Projects"> Projects </Link></li>
                    <li><a href="assets/Darien Hong 2020 Resume.pdf"> Resume </a></li>
                </ul>
            </nav>
        </div>

        );
    }
}