import React, { Component } from 'react';
import './App.css';
import NavbarExp from './navbar-exp.jsx';
import Footer from './footer.jsx';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
        displayBlock8: false,
        displayBlock9: false,
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

    onClick8 = () => {
        this.setState({
            displayBlock8: !this.state.displayBlock8,
        })
    }

    onClick9 = () => {
        this.setState({
            displayBlock9: !this.state.displayBlock9,
        })
    }

    experienceBlock1 = () => {
        return (
            <center>
                <div className="experience-block">
                    <div class="exp-text">
                        {displayBlock7 === false && (
                            <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick7} />)}
                        {displayBlock7 === true && (
                            <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick7} />)}

                        <p class="title-text"> Elections Student Society of McGill University (SSMU) </p>
                        <h3><i>  McGill University &bull; Sept 2018 &mdash; May 2019 </i> </h3>
                        <p style={{ paddingTop: "5px" }}> Elections Coordinator </p>

                        {displayBlock7 === true && (<p style={{ lineHeight: "normal" }}> Elections SSMU is a politically autonomous body
                            responsible for running elections within the Student's Society of McGill University. As an elections coordinator, I was in charge of promoting the voting periods for student government
                            elections as well as promote participation for our Fall and Winter Referendums.
                        </p>
                        )}

                    </div>
                </div>
            </center>
        )
    }


    render() {

        let experienceBlock1 = () => {
            return (
                <center>
                    <br />
                    <div className="experience-block">
                        <div class="exp-text">
                            {displayBlock7 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick7} />)}
                            {displayBlock7 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick7} />)}

                            <p class="title-text"> Elections Student Society of McGill University (SSMU) </p>
                            <h3><i>  McGill University &bull; Sept 2018 &mdash; May 2019 </i> </h3>
                            <p style={{ paddingTop: "5px" }}> Elections Coordinator </p>

                            {displayBlock7 === true && (<p style={{ lineHeight: "normal" }}> Elections SSMU is a politically autonomous body
                                responsible for running elections within the Student's Society of McGill University. As an elections coordinator, I was in charge of promoting the voting periods for student government
                                elections as well as promote participation for our Fall and Winter Referendums.
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let experienceBlock2 = () => {

            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock6 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick6} />)}
                            {displayBlock6 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick6} />)}

                            <p class="title-text"> Enrolment Services </p>
                            <h3><i>  McGill University &bull; Sept 2018 &mdash; Nov 2019 </i> </h3>
                            <p style={{ paddingTop: "5px" }}> Open House Representative </p>

                            {displayBlock6 === true && (<p style={{ lineHeight: "normal" }}> McGill hosts their annual Open House every year in October.
                                I worked at the Open House event in October of 2018 during my first year, and
                                October 2019 in my second year. I was in charge of setting up the event with the organizers, as well as hand out pamphlets and maps,
                                lead parents and students to the right buildings, and answering all their questions at an information table. Through this experience, I was able to
                                talk to prospective students about my experience at McGill and give them insight in potential program choices and ways to get involved.
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let experienceBlock3 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock3 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick3} />)}
                            {displayBlock3 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick3} />)}

                            <p class="title-text"> Deloitte LLP </p>
                            <h3><i>  Toronto, ON &bull; May 2019 &mdash; August 2019 </i> </h3>
                            <p style={{ paddingTop: "5px" }}> Junior Tax Analyst, Assembly Team, Contractor </p>

                            {displayBlock3 === true && (<p style={{ lineHeight: "normal" }}> I worked as a 12-week contractor at Deloitte's BAE location on the Tax Team's Assembly Team.
                                I used different kinds of tax software to assemble tax returns, and help Senior Managers lighten their work load by doing routine calls to
                                the CRA, IRS, RQ etc. This was an opportunity to work in a professional environment and be surrounded by entrepreneurial individuals.
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>

            )
        }

        let experienceBlock4 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock5 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick5} />)}
                            {displayBlock5 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick5} />)}

                            <p class="title-text"> Design Collective </p>
                            <h3><i>  McGill University &bull; Jan 2020 &mdash; May 2021 </i> </h3>
                            <p style={{ paddingTop: "5px" }}> Front-End Developer, Vice-President Events </p>

                            {displayBlock5 === true && (<p style={{ lineHeight: "normal" }}> McGill's club Design Collective is a student-run design community that aims to
                                nurture creativity and design thinking. We host interactive workshops and career-related events with guest speakers from different industries that
                                incorporate design. As the VP Events, I was in charge of planning our weekly events (UX/UI Design Workshop, Prototyping Workshop, Shopify Guest Panel etc.)
                                and help advertise the events throughout the school. I also created the club's official website using <b> Webflow </b>and <b> Figma</b>.
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let experienceBlock5 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock4 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick4} />)}
                            {displayBlock4 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick4} />)}

                            <p class="title-text"> Computer Science Undergraduate Society (CSUS)  </p>
                            <h3><i>  McGill University &bull; Jan 2020 &mdash; Present </i> </h3>
                            <p style={{ paddingTop: "5px" }}> Vice-President Helpdesk, Computer Science Tutor/Mentor, TEAM Awardee </p>

                            {displayBlock4 === true && (<p style={{ lineHeight: "normal" }}> CSUS is a student elected group tasked with improving student academics and life
                                in the computer science department. The <i> Helpdesk </i> is an initiative run by the society where we offer tutoring services everyday for any
                                computer science class offered at McGill at the undergraduate level. As the VP Helpdesk, I am in charge of recruiting, interviewing and
                                overseeing all 50 tutors that we hire and organize a tutoring schedule, as well as planning review sessions and specialized workshops for more complex CS topics.
                                Before being elected as the VP Helpdesk, I worked as a tutor for one semester and received the <a href="https://www.mcgill.ca/tpulse/tomlinson-engagement-award-mentoring-team"
                                    target="_blank" rel="noopener noreferrer"> Tomlinson Engagement Award for Mentoring. </a>
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let experienceBlock6 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock2 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick2} />)}
                            {displayBlock2 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick2} />)}

                            <p class="title-text"> School R &amp; D </p>
                            <h3 ><i> Montreal, QC &bull;  June 2020 &mdash; August 2020 </i> </h3>
                            <p style={{ paddingTop: "5px" }}> UX/UI Researcher, Design, Functional Programming </p>

                            {displayBlock2 === true && (<p style={{ lineHeight: "normal" }}> Hired by a McGill Alumni, I worked on UX/UI Design Research for an
                                education platform start-up. In order to understand the other aspects of the project, I learned some functional programming in <b> Idris</b> and <b> Elm</b>.
                                I created a base design for the learning platform using <b> Figma</b>.
                                Due to COVID-19, this research position was remote.
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let experienceBlock7 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock1 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick1} />)}
                            {displayBlock1 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick1} />)}

                            <p class="title-text"> SMB Legal </p>
                            <h3 > <i> Santa Monica, CA &bull;  June 2020 &mdash; August 2020 </i> </h3>
                            <p style={{ paddingTop: "5px" }}>  Software Engineering Intern, Start-Up, Full-Stack Development  </p>

                            {displayBlock1 === true && (<p style={{ lineHeight: "normal" }}>
                                Through Open Water Accelerator, a new kind of start-up Accelerator, I was paired with a start-up called SMB Legal as a "builder", a Software
                                Engineering Intern who could help build the business' product from scratch. To have an MVP to present to investors by the end of the summer,
                                I created the company's site/software service using <b> ReactJS, Node.js, PostgreSQL,</b>and <b> AWS Services</b>. Due to COVID-19, this internship was remote.
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let experienceBlock8 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock8 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick8} />)}
                            {displayBlock8 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick8} />)}

                            <p class="title-text"> Amazon Web Services (AWS) </p>
                            <h3 > <i> Irvine, CA &bull;  June 2021 &mdash; August 2021 </i> </h3>
                            <p style={{ paddingTop: "5px" }}>  Solutions Architect Intern, Serverless Architecture, Architecture Design  </p>

                            {displayBlock8 === true && (<p style={{ lineHeight: "normal" }}> As a Solutions Architect Intern, I had the opporunity to work on an intern project under my domain of choice: <b> Serverless</b>.
                                I designed an architecture for the Serverless solution using AWS technologies, used the Amazonian 'Working Backwards' process to write a PRFAQ, and built a working demo for a fan-engagement platform using
                                <b> Lambda, API Gateway, IoT Core, DynamoDB, Amplify, CDK </b>and <b> ReactJS</b>. During the build process, I met with simulated "clients" to deliver customer-focused presentations and worked on cultivating
                                my relationships with them as their direct AWS contact. Due to COVID-19, this internship was remote.
                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        let experienceBlock9 = () => {
            return (
                <center>
                    <br />
                    <div class="experience-block">
                        <div class="exp-text">
                            {displayBlock9 === false && (
                                <AddIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick9} />)}
                            {displayBlock9 === true && (
                                <RemoveIcon className="dropdown" style={{ fontSize: "18px" }} onClick={this.onClick9} />)}

                            <p class="title-text"> Amazon Web Services (AWS) </p>
                            <h3 > <i> Seattle, WA &bull;  July 2022 &mdash; Present </i> </h3>
                            <p style={{ paddingTop: "5px" }}>  Prototyping Architect, Software Engineering, Solutions Architecture  </p>

                            {displayBlock9 === true && (<p style={{ lineHeight: "normal" }}> I joined AWS through the Tech U program in July 2022 and became a Solutions Architect for the ISV business.
                                As a Solutions Architect, I supported over 30 customers in the HCLS space on their innovative AWS workloads, influencing over <b> 120</b> opportunities
                                with over <b>$2M</b> launched. I architected solutions for my customers, enabling them through workshops, Immersion Days, PoCs, and demos. I dove deep into AWS services
                                in all domains, with a focus in Data Analytics and Generative AI.

                                <br />
                                <br />

                                In 2024, I transitioned into the role of a Prototyping Architect, returning back to my builder roots. Now, I work with large customers in all different industries, building
                                working Generative AI prototypes on AWS, leveraging the <b> AWS CDK, Python, Langchain</b> and <b> React</b>. I deliver working demos and packaged code, with documentation for customers to deploy
                                the prototypes in their own environments.

                            </p>
                            )}

                        </div>
                    </div>
                    <br />
                </center>
            )
        }

        const {
            display,
            displayBlock1,
            displayBlock2,
            displayBlock3,
            displayBlock4,
            displayBlock5,
            displayBlock6,
            displayBlock7,
            displayBlock8,
            displayBlock9


        } = this.state;

        return (
            <div class="full-page">
                <NavbarExp />
                {display === false && (
                    <div class="appear-div" onClick={this.handleClickOpen}>
                    </div>
                )}

                {display === true && (

                    <center>
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
                                        <line class="svg-line" x1={0} x2={2000} y2={1} stroke="black" />
                                    </svg>
                                </div>
                                <div class="experience-text">

                                    {/*  <Scrollbar renderThumbVertical={props => <div {...props} className="scrollbar" />} style={{color: "black"}}> */}
                                    <h2> work &amp; community involvement </h2>
                                    <div class="experience-description">

                                        {experienceBlock9()}

                                        {experienceBlock8()}

                                        {experienceBlock7()}

                                        {experienceBlock6()}

                                        {experienceBlock5()}

                                        {experienceBlock4()}

                                        {experienceBlock3()}

                                        {experienceBlock2()}

                                        {experienceBlock1()}

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