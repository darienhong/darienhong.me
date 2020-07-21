import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.jsx';
import Scrollbar from 'react-scrollbars-custom';
import Image from './assets/me.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default class Projects extends Component { 
    state = {
        display: true, 
        displayBlock1: false, 
        displayBlock2: false,
        displayBlock3: false,
        displayBlock4: false,
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


    render() {

        const { 
            display, 
            displayBlock1,
            displayBlock2,
            displayBlock3,
            displayBlock4,
        
        
        } = this.state;

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
                < br/>
        
               
              <div class="experience">
                  <div class="homepage-header">
                      <div class="buttons" style={{textAlign: "left"}}>
    
                     <svg class="exit-button" height="20" width="20" onClick={this.handleClickClose}>
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(241, 156, 129)" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(255, 241, 225)" />
                     </svg>
                     <svg height="20" width="20">
                         <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="rgb(255, 241, 225)" />
                     </svg>
                     </div>
                      <div style={{textAlign: "center"}}>
                      <svg height={10} width={"100%"}>
                          <line class="svg-line" x1={1} x2={2000} y2={1} stroke="black" />
                      </svg>
                      </div>
                      <div class="experience-text">
                    <Scrollbar renderThumbVertical={props => <div {...props} className="scrollbar" />} style={{color: "black"}}>
                         <h2> my projects </h2>

                         <div class="experience-description">
                    <center>  
                         <div class="experience-block-1"> 
                    <div class="exp-text">
                        {displayBlock1 === false && (
                    <ArrowDropDownIcon className="dropdown" style={{float: "right", paddingTop: "15px", paddingRight: "10px"}} onClick={this.onClick1}/> )}
                    {displayBlock1 === true && ( 
                    <ArrowDropUpIcon className="dropdown" style={{float: "right", paddingTop: "15px", paddingRight: "10px"}} onClick={this.onClick1}/> )}
                       
                        <p style={{fontFamily: "Jost", fontSize: "30px", fontWeight: "550", padding: "0px"}}> SMB Legal </p>  
                        <h3 > <i> Santa Monica, CA &bull;  June 2020 &mdash; August 2020 </i> </h3>
                        <p style={{ paddingTop: "5px"}}>  Software Engineering Intern, Start-Up, Full-Stack Development  </p>
                      
                      {displayBlock1 === true && (  <p style={{lineHeight: "normal"}}> Through Open Water Accelerator, a new kind of start-up Accelerator, I was paired with a start-up called SMB Legal looking as a "builder", a Software
                            Engineering Intern who could help build the business' website and software service from scratch. 
                            I created the company's site smbusinesslegal.com using ReactJS, Node.js, PostgreSQL and AWS Services. Due to COVID-19, this internship was remote.
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
                    <ArrowDropDownIcon className="dropdown" style={{float: "right", paddingTop: "15px", paddingRight: "10px"}} onClick={this.onClick2}/> )}
                    {displayBlock2 === true && ( 
                    <ArrowDropUpIcon className="dropdown" style={{float: "right", paddingTop: "15px", paddingRight: "10px"}} onClick={this.onClick2}/> )}
                       
                        <p style={{fontFamily: "Jost", fontSize: "30px", fontWeight: "400", padding: "0px"}}> School R &amp; D </p>  
                        <h3 ><i> Montreal, QC &bull;  June 2020 &mdash; August 2020 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> UX/UI Researcher, Design, Functional Programming </p>
                      
                      {displayBlock2 === true && (  <p style={{lineHeight: "normal"}}> Hired by a McGill Alumni, I worked on UX/UI Design Research for an
                      education platform start-up. In order to understand the other aspects of the project, I learned some functional programming in Idris and Elm. 
                      Due to COVID-19, this research position was remote. 
                        </p>
                        )}
                                  
                    </div>
                        </div>
                        </center>

                        <br />
                        <br />
                        <center>  
                         <div class="experience-block-3"> 
                    <div class="exp-text">
                        {displayBlock3 === false && (
                    <ArrowDropDownIcon className="dropdown" style={{float: "right", paddingTop: "15px", paddingRight: "10px"}} onClick={this.onClick3}/> )}
                    {displayBlock3 === true && ( 
                    <ArrowDropUpIcon className="dropdown" style={{float: "right", paddingTop: "15px", paddingRight: "10px"}} onClick={this.onClick3}/> )}
                       
                        <p style={{fontFamily: "Jost", fontSize: "30px", fontWeight: "400", padding: "0px"}}> Deloitte LLP </p>  
                        <h3><i>  Toronto, ON &bull; May 2019 &mdash; August 2019 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> Junior Tax Analyst, Assembly Team, Contractor </p>
                      
                      {displayBlock3 === true && (  <p style={{lineHeight: "normal"}}> I worked as a 12-week contractor at Deloitte's BAE location on the Tax Team's Assembly Team. 
                      I used different kinds of tax software to assemble tax returns, and help Senior Managers lighten their work load by doing routine calls to 
                      the CRA, IRS, RQ etc. This was an opportunity to work in a professional environment and be surrounded by entreneurial individuals. 
                        </p>
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
                    <ArrowDropDownIcon className="dropdown" style={{float: "right", paddingTop: "15px", paddingRight: "10px"}} onClick={this.onClick4}/> )}
                    {displayBlock4 === true && ( 
                    <ArrowDropUpIcon className="dropdown" style={{float: "right", paddingTop: "15px", paddingRight: "10px"}} onClick={this.onClick4}/> )}
                       
                        <p style={{fontFamily: "Jost", fontSize: "30px", fontWeight: "400", padding: "0px"}}> Computer Science Undergraduate Society </p>  
                        <h3><i>  McGill University &bull; Jan 2020 &mdash; May 2021 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> Vice-President Helpdesk, Computer Science Tutor/Mentor, TEAM Awardee </p>
                      
                      {displayBlock4 === true && (  <p style={{lineHeight: "normal"}}> CSUS is a student elected group tasked with improving student academics and life 
                      in the computer science department. The <i> Helpdesk </i> is an initiative run by the society where we offer tutoring services everyday for any 
                      computer science class offered at McGill at the undergraduate level. As the VP Helpdesk, I am in charge of recruiting, interviewing and 
                      overseeing all 50 tutors that we hire and organize a tutoring schedule, as well as planning review sessions and specialized workshops for more complex CS topics. 
                      Before being elected as the VP Helpdesk, I worked as a tutor for one semester and received the Tomlinson Engagement Award for Mentoring. 
                        </p>
                        )}
                                  
                    </div>
                        </div>
                        </center>




                <div style={{lineHeight: "6mm"}}> <p>
               I was born in New Jersey, USA and moved to Toronto, Ontario when I was 6. Now, I've found 
                my way to Montr&eacute;al to study <i>Computer Science </i> at McGill University. What may be interesting 
                to you is how I originally applied to study Psychology, with no background in science at all, but found 
                myself gravitating towards computers, math and weird code. This competitive undergraduate 
                program has armed me with a pocket of very practical analytical and technical hard skills, 
                as well as opened doors for me to explore my creative side and has let me consider the endless 
                career possibilities, as technology is constantly evolving in almost every industry.
                          </p>
                          <p> 
                          When I'm not at the library hunched over my laptop or pulling all-nighters at <span style={{textDecoration: "underline"}}><Link to="/Projects"> Hackathons</Link></span>, you
                can find me exploring the city, taking a nice walk to the park or cooking up a storm in the 
                kitchen! I consider myself a curious person, and I'm always looking for new things to explore,
                new foods to try, new things to learn, and new ways to keep myself entertained. 
                          </p>
                          </div>
                        
                          
                          </div>
                         
                        <br />
                        </Scrollbar >

                      </div>
                    
                  </div>
              </div>
              </center>
            )}
              <div class="footer-block">
            <footer > 
                Developed and designed with &hearts; by Darien Hong &copy; 2020 
            </footer>
            </div> 
                

            </div>
        );

    }
}