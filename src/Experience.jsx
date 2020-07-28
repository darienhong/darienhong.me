import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.jsx';
import Scrollbar from 'react-scrollbars-custom';
import Image from './assets/me.png';
import Footer from './footer.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default class Experience extends Component { 
    state = {
        display: true, 
        displayBlock1: false, 
        displayBlock2: false,
        displayBlock3: false,
        displayBlock4: false,
        displayBlock5: false,
        displayBlock6: false,
        displayBlock7: false,
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
            displayBlock6,
            displayBlock7,
        
        
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
                      
                 {/*  <Scrollbar renderThumbVertical={props => <div {...props} className="scrollbar" />} style={{color: "black"}}> */}
                    <h2> work &amp; community involvement </h2>
                         <div class="experience-description">
                    <center>  
                         <div class="experience-block-1"> 
                    <div class="exp-text">
                        {displayBlock1 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}} onClick={this.onClick1}/> )}
                    {displayBlock1 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick1}/> )}
                       
                        <p class="title-text"> SMB Legal </p>  
                        <h3 > <i> Santa Monica, CA &bull;  June 2020 &mdash; August 2020 </i> </h3>
                        <p style={{ paddingTop: "5px"}}>  Software Engineering Intern, Start-Up, Full-Stack Development  </p>
                      
                      {displayBlock1 === true && (  <p style={{lineHeight: "normal"}}> Through Open Water Accelerator, a new kind of start-up Accelerator, I was paired with a start-up called SMB Legal looking as a "builder", a Software
                            Engineering Intern who could help build the business' website and software service from scratch. 
                            I created the company's site/software service smbusinesslegal.com using ReactJS, Node.js, PostgreSQL and AWS Services. Due to COVID-19, this internship was remote.
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
                       
                        <p class="title-text"> School R &amp; D </p>  
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
                         <div class="experience-block-4"> 
                    <div class="exp-text">
                        {displayBlock4 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick4}/> )}
                    {displayBlock4 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}} onClick={this.onClick4}/> )}
                       
                        <p class="title-text"> Computer Science Undergraduate Society (CSUS)  </p>  
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
                        <br />
                        <br />

                        <center>  
                         <div class="experience-block-5"> 
                    <div class="exp-text">
                        {displayBlock5 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick5}/> )}
                    {displayBlock5 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick5}/> )}
                       
                        <p class="title-text"> Design Collective </p>  
                        <h3><i>  McGill University &bull; Jan 2020 &mdash; May 2021 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> Front-End Developer, Vice-President Events </p>
                      
                      {displayBlock5 === true && (  <p style={{lineHeight: "normal"}}> McGill's club Design Collective is a student-run design community that aims to 
                      nurture creativity and design thinking. We host interactive workshops and career-related events with guest speakers from different industries that 
                      incorporate design. As the VP Events, I was in charge of planning our weekly events (UX/UI Design Workshop, Prototyping Workshop, Shopify Guest Panel etc.) 
                      and help advertise the events throughout the school. I also created the club's official website using Webflow and Figma. 
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
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick3}/> )}
                    {displayBlock3 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick3}/> )}
                       
                        <p class="title-text"> Deloitte LLP </p>  
                        <h3><i>  Toronto, ON &bull; May 2019 &mdash; August 2019 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> Junior Tax Analyst, Assembly Team, Contractor </p>
                      
                      {displayBlock3 === true && (  <p style={{lineHeight: "normal"}}> I worked as a 12-week contractor at Deloitte's BAE location on the Tax Team's Assembly Team. 
                      I used different kinds of tax software to assemble tax returns, and help Senior Managers lighten their work load by doing routine calls to 
                      the CRA, IRS, RQ etc. This was an opportunity to work in a professional environment and be surrounded by entrepreneurial individuals. 
                        </p>
                        )}
                                  
                    </div>
                        </div>
                        </center>
                        <br />
                        <br />

                        <center>  
                         <div class="experience-block-6"> 
                    <div class="exp-text">
                        {displayBlock6 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick6}/> )}
                    {displayBlock6 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick6}/> )}
                       
                        <p class="title-text"> Enrolment Services </p>  
                        <h3><i>  McGill University &bull; Sept 2018 &mdash; Nov 2019 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> Open House Representative </p>
                      
                      {displayBlock6 === true && (  <p style={{lineHeight: "normal"}}> McGill hosts their annual Open House every year in October. 
                      I worked at the Open House event in October of 2018 during my first year, and 
                      October 2019 in my second year. I was in charge of setting up the event with the organizers, as well as hand out pamphlets and maps, 
                      lead parents and students to the right buildings, and answering all their questions at an information table. Through this experience, I was able to 
                      talk to prospective students about my experience at McGill and give them insight in potential program choices and ways to get involved. 
                        </p>
                        )}
                                  
                    </div>
                        </div>
                        </center>
                        <br />
                        <br />

                        <center>  
                         <div class="experience-block-7"> 
                    <div class="exp-text">
                        {displayBlock7 === false && (
                    <AddIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick7}/> )}
                    {displayBlock7 === true && ( 
                    <RemoveIcon className="dropdown" style={{ fontSize: "18px"}}  onClick={this.onClick7}/> )}
                       
                        <p class="title-text"> Elections Student Society of McGill University (SSMU) </p>  
                        <h3><i>  McGill University &bull; Sept 2018 &mdash; May 2019 </i> </h3>
                        <p style={{ paddingTop: "5px"}}> Elections Coordinator </p>
                      
                      {displayBlock7 === true && (  <p style={{lineHeight: "normal"}}> Elections SSMU is a politically autonomous body 
                      responsible for running elections within the Student's Society of McGill University. As an elections coordinator, I was in charge of promoting the voting periods for student government 
                      elections as well as promote participation for our Fall and Winter Referendums. 
                        </p>
                        )}
                                  
                    </div>
                        </div>
                        </center>
                        <br />
                      
                          
                          </div>
                         
                        <br />
                    </div>   
                    
                {/*     </Scrollbar > */}

                      </div>
                    
                  </div>
          
              </center>
            )}

            
            <Footer />

            </div>
        );

    }
}