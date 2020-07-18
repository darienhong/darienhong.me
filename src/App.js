import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';

export default class Navbar extends Component { 
    
    render() {
        return(
          <Router> 
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Experience">
                <Experience />
              </Route>
              <Route path="/Projects">
              <Projects />
              </Route> 
              <Route path="/About">
                <AboutMe />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>


         

        );
    }
}