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

            <div class="footer">
                <footer class="footer-block"> 
                
                <p> Designed and developed with <FavoriteBorderIcon /> &copy; Darien Hong 2020 </p>
                
                </footer>

            </div>

        );
    }
}