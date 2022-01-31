import React, { Component } from 'react';
import './App.css';
import NavbarProjects from './navbar-projects.jsx';

import Footer from './footer.jsx';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import GitHubIcon from '@material-ui/icons/GitHub';
import SlideshowIcon from '@material-ui/icons/Slideshow';

export default class Projects extends Component { 
    state = {
        display: true, 
        displayBlock1: false, 
        displayBlock2: false,
        displayBlock3: false,
        displayBlock4: false,
        displayBlock5: false,
      /*  displayBlock6: false, */
     /*   displayBlock7: false, */
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

    onClick1 = () => {
        this.setState({
            displayBlock1: !this.state.displayBlock1,
        })
    }

    onClick2 = () => {
        this.setState({
            displayBlock2: !this.state.displayBlock2,
        })
    }

    onClick3 = () => {
        this.setState({
            displayBlock3: !this.state.displayBlock3,
        })
    }

    onClick4 = () => {
        this.setState({
            displayBlock4: !this.state.displayBlock4,
        })
    }

    onClick5 = () => {
        this.setState({
            displayBlock5: !this.state.displayBlock5,
        })
    }

    onClick6 = () => {
        this.setState({
            displayBlock6: !this.state.displayBlock6,
        })
    }

    onClick7 = () => {
        this.setState({
            displayBlock7: !this.state.displayBlock7,
        })
    }



    render() {

        const { 
            display, 
            displayBlock1,
            displayBlock2,
            displayBlock3,
            displayBlock4,
            displayBlock5,
        /*    displayBlock6, */
        /*    displayBlock7, */
        
        
        } = this.state;

        return (
            <div class="full-page">
                <NavbarProjects />
                {display === false && (
                <div class="appear-div" onClick={this.handleClickOpen}>
                     </div>
            )}

            { display === true  && ( 

            <center>
                <br />
                <br />
                <br />
        
               
              <div class="experience">
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
                      <div class="experience-text">
                      
                {/*   <Scrollbar renderThumbVertical={props => <div {...props} className="scrollbar" />} style={{color: "black"}}> */}
                    <h2> my projects </h2>
                         <div class="experience-description">
                    <center>  
                         <div class="experience-block-1"> 
                    <div class="exp-text">
                        {displayBlock1 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}} onClick={this.onClick1}/> )}
                    {displayBlock1 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick1}/> )}
                       
                        <p class="title-text"> Spark </p>  
                        <h3 > <i> Summer 2020 </i> </h3>
                        <p style={{ paddingTop: "5px"}}>  UX/UI Design, Figma, Wireframes, Prototyping  </p>
                      
                      {displayBlock1 === true && ( <div>  <p style={{lineHeight: "normal"}}> I was asked by a group of students at McGill who were working on an educational
                      live-streaming platform as a summer project to join the team as a UX/UI Designer. I created simple wireframes for the the app's base design using <b> Figma</b>. 
                      
                      <br />
                      <div class="project-links"> 
                     <a href="https://www.figma.com/file/QZRfGJOtM8f5PnDgITUMUL/spark-ui?node-id=0%3A1" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                         <div class="link">  Figma </div></a>
                     </div>
                     <br />

                     </p>
                            </div> 
                           
                        )}
                        <br />
                                  
                    </div>
                   </div>
                        </center>
                        <br />
                        <br />
                      
                        <center>  
                         <div class="experience-block-3"> 
                    <div class="exp-text">
                        {displayBlock3 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick3}/> )}
                    {displayBlock3 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick3}/> )}
                       
                        <p class="title-text"> darienhong.me </p>  
                        <h3><i>  Summer 2020 (Presently maintained) </i> </h3>
                        <p style={{ paddingTop: "5px"}}> ReactJS, HTML, CSS, Front-End Development, Figma </p>
                      
                      {displayBlock3 === true && (  <p style={{lineHeight: "normal"}}>  As a project to keep myself busy during Summer 2020, I built my own personal website (what you're looking at now) 
                     to act as an online resume and portfolio. I started by creating wireframes and a prototype in Figma and then I brought my ideas to life using <b> React, HTML, CSS </b> and <b> JavaScript</b>. 
                    I created a responsive website that you can view on your tablets or phones. I am always updating the site with new information and looking for ways 
                    to make it better. 
                    <br />
                      <div class="project-links"> 
                     <a href="https://www.figma.com/file/yqEUqpokCSWD5kH8uTLjoO/darienhong.me?node-id=0%3A1" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                         <div class="link">  Figma </div></a>
                     </div>
                     <br />
                     <br />
                     
                        </p>
                        )}
                                  
                    </div>
                        </div>
                        </center>
                        <br />
                        <br />
                        <center>  
                         <div class="experience-block-2"> 
                    <div class="exp-text">
                        {displayBlock2 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick2}/> )}
                    {displayBlock2 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}} onClick={this.onClick2}/> )}
                       
                        <p class="title-text"> Securicard </p>  
                        <h3 ><i> BOLT Fintech Case Comp/Hackathon &bull;  November 2019 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> Swift, Xcode, Front-End, UI Design </p>
                      
                      {displayBlock2 === true && ( <div>  <p style={{lineHeight: "normal"}}> McGill's club BOLT held their annual Case Competition/Hackathon in November of 2019. My team
                     and I participated in this week-long intensive competition filled with workshops, guest speakers 
                     and a final pitch day at the Microsoft Office in Montreal. We came up with this new credit monitoring
                     solution for small businesses - a digital business card distributor software as a service for business 
                     executives/administrators to implement as a way of budgeting and maintaining employee credibility. My team
                     and I won second place for our pitch and idea. I used <b> Swift </b> and  <b> Xcode </b> to create a UI Demo. 
                     <br />
                     <div class="project-links"> 
                     <a href="https://drive.google.com/file/d/1XctAtTYE9o8UlcNnM2rm0ps-7wMITezY/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                        <div class="link"> <SlideshowIcon style={{fontSize: "16px"}}/> &nbsp; Slides </div></a>
                        <a href="https://github.com/conniaren/SecuriCard-BOLT-Fintech-Pitch" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                        <div class="link"> <GitHubIcon style={{fontSize: "16px"}}/> &nbsp; Github </div></a>
                     </div>
                     <br />
                     <br />
                        </p>
                      

                        </div>
                        )}
                                  
                    </div>
                        </div>
                        </center>

                        <br />
                        <br />
                        <center>  
                         <div class="experience-block-4"> 
                    <div class="exp-text">
                        {displayBlock4 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick4}/> )}
                    {displayBlock4 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}} onClick={this.onClick4}/> )}
                       
                        <p class="title-text"> Digi-Fridge </p>  
                        <h3><i>  McWics 2020 &bull; Jan 2020 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> React-Native, JavaScript, Mobile Development, Sustainability Hack </p>
                      
                      {displayBlock4 === true && (  <p style={{lineHeight: "normal"}}> McGill's Women in Computer Science (McWICS) society hosted their annual hackathon in January of 2020.
                     My team and I decided that we wanted
                     to try creating something for the Sustainability Hack category. We came up with "DigiFridge", a digital fridge app
                     for people to keep track of what they currently have in their fridge, reminding them of upcoming expiration dates
                     and a way to help people avoid buying things they already have and may have forgotten about. The motive behind this 
                     idea was to reduce food waste, help users budget and be an organization tool as well. During this hackathon, we learned
                     how to use <b> React-Native </b> and <b> JavaScript </b>to create a demo for the app. 
                     <br />
                     <div class="project-links"> 
                     <a href="https://devpost.com/software/digi-fridge" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                         <div class="link">  Devpost </div></a>
                         <a href="https://github.com/darienhong/McWics-2020" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                        <div class="link"> <GitHubIcon style={{fontSize: "16px"}}/> &nbsp; Github </div></a>
                     </div>
                     <br />
                     <br />
                        </p>
                        )}
                                  
                    </div>
                        </div>
                        </center>
                        <br />
                        <br />

                        <center>  
                         <div class="experience-block-5"> 
                    <div class="exp-text">
                        {displayBlock5 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick5}/> )}
                    {displayBlock5 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick5}/> )}
                       
                        <p class="title-text"> Play, Learn, Donate </p>  
                        <h3><i>  YHACK 2019 &mdash; Yale University &bull; October 2019 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> Swift, Xcode, iOS Mobile Development </p>
                      
                      {displayBlock5 === true && (  <p style={{lineHeight: "normal"}}> I participated in my first Hackathon in October of 2019, which was Yale's Annual
                Hackathon, YHACK 2019. I formed a team with some other first-timers that I met on 
                the bus to Connecticut, and as overwhelming as the weekend was, I believe that it was 
                a great experience and the perfect opportunity to network, participate in workshops and 
                learn something new. My team and I did not end up submitting our project on time, but instead 
                we took the time to learn a new language and talk to sponsors. Our idea was a mobile app for social good
                - The idea was an app with a series of games all related to different charities. Whenever you level up in a game, 
                sponsors will donate to the charity of choice. I took the weekend as an opportunity to learn <b> Swift</b> and a little more about <b> iOS Mobile Development</b>.  
                <br />
                <div class="project-links"> 
                     <a href="https://devpost.com/software/foals" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                         <div class="link">  Devpost </div></a>
                     </div>
                     <br />
                     <br />
                        </p>
                        )}
                                  
                    </div>
                        </div>
                        </center>

                       
                        <br />
                    
                          
                          </div>
                         
                        <br />
                   {/*   </Scrollbar > */}

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