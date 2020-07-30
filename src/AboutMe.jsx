import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.jsx';
import NavbarAbout from './navbar-about.jsx';
import Scrollbar from 'react-scrollbars-custom';
import Image from './assets/me.png';
import Image2 from './assets/me2.png';
import Footer from './footer.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
                <NavbarAbout />
                {display === false && (
                <div class="appear-div" onClick={this.handleClickOpen}>
                     </div>
            )}

            { display === true  && ( 

            <center>
                <br />
                <br />
                <br />
             
              
               
              <div class="about">
                  <div class="homepage-header">
                      <div class="buttons" style={{textAlign: "left"}}>
    
                     <svg class="exit-button" height="20" width="20" onClick={this.handleClickClose}>
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(241, 156, 129)" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(241, 238, 228)" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(241, 238, 228)" />
                     </svg>
                     </div>
                      <div style={{textAlign: "center"}}>
                      <svg height={10} width={"100%"}>
                          <line class="svg-line" x1={0} x2={2000} y2={1} stroke="black" />
                      </svg>
                      </div>
                      <div class="about-text">
                 {/*  <Scrollbar renderThumbVertical={props => <div {...props} className="scrollbar" />} style={{color: "black"}}> */}
                      
                         <h2> who am i? </h2>

                         <div class="about-me-description">
                       
                            <div class="border-image" style={{border: "4px solid rgb(190, 201, 216)", margin: "20px"}}>
                            <img src={Image} alt="pic of me" class="me-pic" width="300px"/>
                            </div>
   
                            <div class="border-image" style={{border: "4px solid rgb(190, 201, 216)", margin: "20px"}}>
                            <img src={Image2} alt="pic of me" class="me-pic" width="300px"/>
                            </div>
                        
                            <div style={{ lineHeight: "6mm"}}>
                        <p> <span style={{color: "rgb(82, 117, 163)", fontSize: "20px", fontFamily: "Display", fontWeight: "600"}}> Hi, I'm Darien! </span> I'm what you may call a <span style={{fontWeight: "600"}}> peculiar </span> person. I'm always asking myself - 
                "How does this work?", "How do I solve this problem?", "Why do I like how this looks?". 
                At McGill University, I study the uses of computers and programming languages, while 
                developing technical skills and a new perspective on problem solving. In the process of 
                solving problems or the development of new ideas, I also take into consideration how <i>nice </i> 
                something looks. Design for me is a way to bring my ideas to life in a creative, meaningful 
                 way that resonates with people. </p>
                </div>
                <div style={{lineHeight: "6mm"}}> <p>
               I was born in New Jersey, USA and moved to Toronto, Canada when I was 6. Now, I've found 
                my way to Montr&eacute;al to study <a href="https://www.mcgill.ca/study/2020-2021/faculties/science/undergraduate/programs/bachelor-science-bsc-major-computer-science"
                target="_blank" rel="noopener noreferrer"> Computer Science
                </a> at McGill University. What may be interesting 
                to you is how I originally applied to study Psychology, with no background in science at all, but found 
                myself gravitating towards computers, math and weird code. This competitive undergraduate 
                program has armed me with a pocket of very practical analytical and technical hard skills, 
                as well as opened doors for me to explore my creative side and has let me consider the endless 
                career possibilities, as technology is constantly evolving in almost every industry.
                          </p>
                         </div> 
                         <div style={{lineHeight: "6mm"}}> 
                          <p> 
                          When I'm not at the library hunched over my laptop or pulling all-nighters at <span style={{textDecoration: "underline"}}><Link to="/Projects"> Hackathons</Link></span>, you
                can find me exploring the city, taking a nice walk to the park or cooking up a storm in the 
                kitchen! I consider myself a curious person, and I'm always looking for new things to explore,
                new foods to try, new things to learn, and new ways to keep myself entertained. 
                          </p>
                          </div>
                        
                          
                          </div>
                         
                        <br />
                    {/*  </Scrollbar > */}

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