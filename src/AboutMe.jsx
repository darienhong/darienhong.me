import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.jsx';
import Scrollbar from 'react-scrollbars-custom';

export default class AboutMe extends Component { 

    state = {
        display: true, 
    }


    handleClickClose = () => {
        this.setState({
            display: false,
        })
    }

    handleClickOpen = () => {
        this.setState({
            display: true,
        })
    }


    render() {

        const { display } = this.state;

        return (
            <div class="full-page">
                <Navbar />
                {display === false && (
                <div class="appear-div" onClick={this.handleClickOpen}>
                     </div>
            )}

            { display === true  && ( 

            <center>
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
              <div class="about">
                  <div class="homepage-header">
                      <div class="buttons" style={{textAlign: "left"}}>
    
                     <svg class="exit-button" height="20" width="20" onClick={this.handleClickClose}>
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(241, 156, 129)" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(192, 211, 228)" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(192, 211, 228)" />
                     </svg>
                     </div>
                      <div style={{textAlign: "center"}}>
                      <svg height={10} width={800}>
                          <line class="svg-line" x1={1} x2={1000} y2={1} stroke="black" />
                      </svg>
                      </div>
                      <div class="about-text">
                    <Scrollbar renderThumbVertical={props => <div className="scrollbar" />} style={{color: "black"}}>
                      
                         <h2> who am i? </h2>
                          <p> I'm an aspiring Software Developer, interested in Front-End Development,
                              Product Design and UX/UI Design. I'm a huge fan of people and learning how things work. </p>
                              <p> I'm an aspiring Software Developer, interested in Front-End Development,
                              Product Design and UX/UI Design. I'm a huge fan of people and learning how things work. </p>
                              <p> I'm an aspiring Software Developer, interested in Front-End Development,
                              Product Design and UX/UI Design. I'm a huge fan of people and learning how things work. </p>
                          
                         
                        <br />
                        </Scrollbar >

                      </div>
                    
                  </div>
              </div>
              </center>
            )}
            
                

            </div>
        );

    }
}