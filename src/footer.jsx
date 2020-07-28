import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logo from './assets/logo.png';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default class Footer extends Component { 
    
    render() {
        return(

            <div class="footer-block">
            <footer > 
                Developed and designed with <span style={{fontFamily: "Segoe UI", padding: "0"}}>♥</span> by Darien Hong &copy; 2020 
            </footer>
            </div> 

        );
    }
}