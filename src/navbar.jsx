import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Navbar extends Component { 
    
    render() {
        return(

            <div class="nav-bar-container">         
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