import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.jsx';
import Lottie from 'react-lottie';
import animationData from './assets/office.json';

export default class Home extends Component { 
    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
        };
        

        return (
            <div class="full-page"> 
                <Navbar />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br/> < br/> <br />



            {/*    <center>
               <Lottie 
	              options={defaultOptions}
                
                width={1000}
               
            />  </center> */}

            <center>
              <div class="homepage">
                  <div class="homepage-header">
                      <div class="buttons" style={{textAlign: "left"}}>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="white" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" fill="black" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" fill="black" />
                     </svg>
                     </div>
                      <div style={{textAlign: "center"}}>
                      <svg height={30} width={700}>
                          <line class="svg-line" x1={1} x2={1000} y2={1} stroke="black" />
                      </svg>
                      </div>
                      
                      <div class="homepage-text">
                          <p> Hi I'm Darien!</p>
                          <p> adadsasadsadad </p>
                          <p> asdasdadsds</p>

                      </div>
                  </div>
              </div>
              </center>
 
    
            
                

            </div>

        );

    }
}