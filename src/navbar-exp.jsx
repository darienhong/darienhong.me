import React, { Component } from 'react';
import './App.css';
import {
    Link
  } from "react-router-dom";
import Logo from './assets/logo.png';

export default class NavbarExp extends Component { 
    
    render() {
        return(

            <div class="nav-bar-container">  
           <Link to="/"> <img src={Logo} alt="logo" class="logo"/> </Link>
            <nav>
                <ul>
                    <li><Link to="/About"> About </Link></li>
                    <li><Link to="/Experience" style={{color: "white"}}> Experience </Link></li>
                    <li><Link to="/Projects"> Projects </Link></li>
                    <li><a href="https://drive.google.com/file/d/1WwveLvOF9pZMFvQZC5AJV7GCTM79Nnfe/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Resume </a></li>
                </ul>
            </nav>
        </div>

        );
    }
}