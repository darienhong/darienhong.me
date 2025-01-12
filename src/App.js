import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';

export default class Navbar extends Component { 
    
    render() {


      window.addEventListener('resize', () => { 
        let vh = window.innerHeight * 0.01; 
        document.documentElement.style.setProperty('--vh', `${vh}px`);

      })

      return (
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
        // return (
        //   <Router> 
        //     <Switch>
        //       <Route path="/Home" element={<Home/>}/>
        //         {/* <Home />
        //       </Route> */}
        //       <Route path="/Experience" element={<Experience/>}/>
        //         {/* <Experience />
        //       </Route> */}
        //       <Route path="/Projects" element={<Projects/>}/>
        //       {/* <Projects />
        //       </Route>  */}
        //       <Route path="/About" element={<AboutMe/>}/>
        //         {/* <AboutMe />
        //       </Route> */}
        //       <Route path="/" element={<Home/>}/>
        //         {/* <Home />
        //       </Route> */}
        //     </Switch>
        //   </Router>       

        );
    }
}


 