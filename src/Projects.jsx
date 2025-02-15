import React, { Component } from 'react';
import './App.css';
import NavbarProjects from './navbar-projects.jsx';

import Footer from './footer.jsx';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import GitHubIcon from '@mui/icons-material/GitHub'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Lottie from 'lottie-react'
import animationData from './animations/waves.json'

export default class Projects extends Component {
    state = {
        display: true,
        displayBlock1: false,
        displayBlock2: false,
        displayBlock3: false,
        displayBlock4: false,
        displayBlock5: false,
        displayBlock6: false
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
            displayBlock6


        } = this.state;


        let projectBlock1 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock1 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick1} />)}
                            {displayBlock1 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick1} />)}

                            <p class="title-text"> Spark </p>
                            <p style={{ paddingTop: "5px" }}>  UX/UI Design, Figma, Wireframes, Prototyping  </p>

                            {displayBlock1 === true && (<div>  <p style={{ lineHeight: "normal" }}> I was asked by a group of students at McGill who were working on an educational
                                live-streaming platform as a summer project to join the team as a UX/UI Designer. I created simple wireframes for the the app's base design using <b> Figma</b>.

                                <br />
                                <div class="project-links">
                                    <a href="https://www.figma.com/file/QZRfGJOtM8f5PnDgITUMUL/spark-ui?node-id=0%3A1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link">  Figma </div></a>
                                </div>
                                <br />

                            </p>
                            </div>

                            )}
                            <br />

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let projectBlock2 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock3 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick3} />)}
                            {displayBlock3 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick3} />)}

                            <p class="title-text"> darienhong.me </p>
                            <p style={{ paddingTop: "5px" }}> ReactJS, HTML, CSS, Front-End Development, Figma </p>

                            {displayBlock3 === true && (<p style={{ lineHeight: "normal" }}>  As a project to keep myself busy during Summer 2020, I built my own personal website (what you're looking at now)
                                to act as an online resume and portfolio. I started by creating wireframes and a prototype in Figma and then I brought my ideas to life using <b> React, HTML, CSS </b> and <b> JavaScript</b>.
                                I created a responsive website that you can view on your tablets or phones. I am always updating the site with new information and looking for ways
                                to make it better.
                                <br />
                                <div class="project-links">
                                    <a href="https://www.figma.com/file/yqEUqpokCSWD5kH8uTLjoO/darienhong.me?node-id=0%3A1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link">  Figma </div></a>
                                </div>
                                <br />
                                <br />

                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let projectBlock3 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock2 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick2} />)}
                            {displayBlock2 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick2} />)}

                            <p class="title-text"> Securicard </p>
                            <p style={{ paddingTop: "5px" }}> Swift, Xcode, Front-End, UI Design </p>

                            {displayBlock2 === true && (<div>  <p style={{ lineHeight: "normal" }}> McGill's club BOLT held their annual Case Competition/Hackathon in November of 2019. My team
                                and I participated in this week-long intensive competition filled with workshops, guest speakers
                                and a final pitch day at the Microsoft Office in Montreal. We came up with this new credit monitoring
                                solution for small businesses - a digital business card distributor software as a service for business
                                executives/administrators to implement as a way of budgeting and maintaining employee credibility. My team
                                and I won second place for our pitch and idea. I used <b> Swift </b> and  <b> Xcode </b> to create a UI Demo.
                                <br />
                                <div class="project-links">
                                    <a href="https://drive.google.com/file/d/1XctAtTYE9o8UlcNnM2rm0ps-7wMITezY/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link"> <SlideshowIcon style={{ fontSize: "16px" }} /> &nbsp; Slides </div></a>
                                    <a href="https://github.com/conniaren/SecuriCard-BOLT-Fintech-Pitch" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link"> <GitHubIcon style={{ fontSize: "16px" }} /> &nbsp; Github </div></a>
                                </div>
                                <br />
                                <br />
                            </p>


                            </div>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let projectBlock4 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock4 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick4} />)}
                            {displayBlock4 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick4} />)}

                            <p class="title-text"> Digi-Fridge </p>
                            <p style={{ paddingTop: "5px" }}> React-Native, JavaScript, Mobile Development, Sustainability Hack </p>

                            {displayBlock4 === true && (<p style={{ lineHeight: "normal" }}> McGill's Women in Computer Science (McWICS) society hosted their annual hackathon in January of 2020.
                                My team and I decided that we wanted
                                to try creating something for the Sustainability Hack category. We came up with "DigiFridge", a digital fridge app
                                for people to keep track of what they currently have in their fridge, reminding them of upcoming expiration dates
                                and a way to help people avoid buying things they already have and may have forgotten about. The motive behind this
                                idea was to reduce food waste, help users budget and be an organization tool as well. During this hackathon, we learned
                                how to use <b> React-Native </b> and <b> JavaScript </b>to create a demo for the app.
                                <br />
                                <div class="project-links">
                                    <a href="https://devpost.com/software/digi-fridge" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link">  Devpost </div></a>
                                    <a href="https://github.com/darienhong/McWics-2020" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link"> <GitHubIcon style={{ fontSize: "16px" }} /> &nbsp; Github </div></a>
                                </div>
                                <br />
                                <br />
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let projectBlock5 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock5 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick5} />)}
                            {displayBlock5 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick5} />)}

                            <p class="title-text"> Play, Learn, Donate </p>
                            <p style={{ paddingTop: "5px" }}> Swift, Xcode, iOS Mobile Development </p>

                            {displayBlock5 === true && (<p style={{ lineHeight: "normal" }}> I participated in my first Hackathon in October of 2019, which was Yale's Annual
                                Hackathon, YHACK 2019. I formed a team with some other first-timers that I met on
                                the bus to Connecticut, and as overwhelming as the weekend was, I believe that it was
                                a great experience and the perfect opportunity to network, participate in workshops and
                                learn something new. My team and I did not end up submitting our project on time, but instead
                                we took the time to learn a new language and talk to sponsors. Our idea was a mobile app for social good
                                - The idea was an app with a series of games all related to different charities. Whenever you level up in a game,
                                sponsors will donate to the charity of choice. I took the weekend as an opportunity to learn <b> Swift</b> and a little more about <b> iOS Mobile Development</b>.
                                <br />
                                <div class="project-links">
                                    <a href="https://devpost.com/software/foals" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link">  Devpost </div></a>
                                </div>
                                <br />
                                <br />
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let projectBlock6 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock6 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick6} />)}
                            {displayBlock6 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick6} />)}

                            <p class="title-text"> Race-Along </p>
                            <p style={{ paddingTop: "5px" }}> AWS Serverless, Lambda, CDK, TypeScript, React </p>

                            {displayBlock6 === true && (<p style={{ lineHeight: "normal" }}> During my internship at AWS, I built a functioning prototype 
                                for a fan engagement platform where you could track your favourite teams in real-time during a race or event. The solution was architected using AWS services, 
                                primarily <b> Lambda, API Gateway, DynamoDB, IoT Core, Amplify, CDK </b> and the UI was built out using <b> ReactJS </b>. I also created wireframes for 
                                the project to help put my vision on paper. 
                        
                                <div class="project-links">
                                    <a href="https://github.com/darienhong/nautilus-serverless-app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link"> <GitHubIcon style={{ fontSize: "16px" }} /> &nbsp; Github </div></a>
                                        <a href="https://www.figma.com/proto/7BjCwn7q11nz8SboNDI6ES/nautilus-serverless-mockup?page-id=0%3A1&node-id=1-18&p=f&viewport=-36%2C397%2C0.37&t=6aRYtr5fKn6wIfhm-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A18&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div class="link">  Figma </div></a>
                                </div>
                                <br />
                                <br />
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }



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
                <NavbarProjects />
                {display === false && (
                    <div class="appear-div" onClick={this.handleClickOpen}>
                    </div>
                )}

                {display === true && (

                    <center>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />


                        <div class="experience">
                            <div class="homepage-header">
                                <div class="buttons" style={{ textAlign: "left" }}>

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
                                <div style={{ textAlign: "center" }}>
                                    <svg height={10} width={"100%"}>
                                        <line class="svg-line" x1={0} x2="100%" y2={1} stroke="black" />
                                    </svg>
                                </div>
                                <div class="experience-text">

                                    {/*   <Scrollbar renderThumbVertical={props => <div {...props} className="scrollbar" />} style={{color: "black"}}> */}
                                    <h2> my projects </h2>
                                    <div class="experience-description">
                                        {projectBlock6()}
                                        {projectBlock1()}
                                        {projectBlock2()}
                                        {projectBlock3()}
                                        {projectBlock4()}
                                        {projectBlock5()}

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