import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import { SocialIcon } from 'react-social-icons';

export default class Home extends Component { 

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
              
              <div class="homepage">
                  <div class="homepage-header">
                      <div class="buttons" style={{textAlign: "left"}}>
    
                     <svg class="exit-button" height="20" width="20" onClick={this.handleClickClose}>
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(241, 156, 129)" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(248, 237, 198)" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(248, 237, 198)" />
                     </svg>
                     </div>
                      <div style={{textAlign: "center"}}>
                      <svg height={10} width={"100%"}>
                          <line class="svg-line" x1={0} x2={1000} y2={1} stroke="black" />
                      </svg>
                      </div>
                      
                      <div class="homepage-text">
                         <h2> Hi, I'm Darien! </h2>
                          <p> I'm an aspiring Software Developer, interested in Front-End Development, Mobile Development, and
                              Product &amp; UX/UI Design. I'm a huge fan of people and learning how things work. </p>
                          
                          <div class="contact">
                              <p style={{}}> Come say hi! </p>
                              <div class="contact-button">
                              <a href={"mailto: darien.hong7@gmail.com"} ><SocialIcon className="icon" network="email" bgColor="rgb(82, 117, 163)" style={{width: 26, height: 26}} /></a>
                      
                          </div>
                              <div class="contact-button" style={{marginLeft: "20px"}}>

                                  <a href="https://github.com/darienhong" target="_blank" rel="noopener noreferrer"> <SocialIcon className="icon" network="github" bgColor="rgb(82, 117, 163)" style={{width: 26, height: 26}} /></a>
                          </div>
                              <div class="contact-button">
                              <a href="https://www.linkedin.com/in/darienhong/" target="_blank" rel="noopener noreferrer"><SocialIcon className="icon" network="linkedin" bgColor="rgb(82, 117, 163)" style={{width: 26, height: 26}} /></a>
                     
                          </div>


                        </div>
                        <br />

                      </div>
                  </div>
              </div>
              </center>
            )}
            <Footer />
            
            </div>

        );

    }
}