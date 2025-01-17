import React, { Component } from 'react';
import './App.css';
import NavbarAbout from './navbar-about.jsx';
import Image from './assets/me-new.JPG';
import Lottie from 'lottie-react'
import animationData from './animations/waves.json'
import Image2 from './assets/me-new-2.jpg';
import Footer from './footer.jsx';


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
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1
                    }}
                />
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
                          <line class="svg-line" x1={0} x2="100%" y2={1} stroke="black" />
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
                        <p> <span style={{color: "rgb(82, 117, 163)", fontSize: "20px", fontFamily: "Display", fontWeight: "600"}}> Hi, I'm Darien! </span> 
                        I was raised in Toronto, Canada and currently live in Seattle, in the evergreen state. I work as a Prototyping Architect at 
                        AWS, helping customers of all sizes build large-scale prototypes using emerging technologies such as AI/ML, IoT, Robotics and Generative AI. The 
                        technology landscape is evolving at an unprecedented pace, and I feel lucky to be at the forefront of it, and to be able to work with those technologies
                        to create innovative solutions to real-world problems. 

                 </p>
                </div>
                <div style={{lineHeight: "6mm"}}> <p>
               Prior to joining AWS, I studied <a href="https://www.mcgill.ca/study/2020-2021/faculties/science/undergraduate/programs/bachelor-science-bsc-major-computer-science"
                target="_blank" rel="noopener noreferrer"> Computer Science
                </a> at McGill University in Montreal. Although I originally applied to study psychology, I found myself 
                gravitating towards my STEM classes, and ultimately decided that studying CS was a better fit for me. This competitive 
                undergraduate program armed me with a pocket of very practical analytical and technical hard skills, which I've been able to apply to my internships and my current role. 
                          </p>
                         </div> 
                         <div style={{lineHeight: "6mm"}}> 
                          <p> 
                Outside of work, I enjoy exploring new hobbies and learning new things about myself. My <b>current </b> obsessions and interests include: 
                cooking healthy and interesting meals with whatever ingredients I have access to, crocheting cute animals, cross stitching,
                board games, psychological and domestic thrillers, real estate, and dogs!! More specifically, my dog Miso (included on the right). 


                        
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