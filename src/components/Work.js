import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './projectcard';
import * as whatsappIMG from '../images/whatsapp.png';
import * as sisIMG from '../images/sis-slack-integration.gif';
import * as gotIMG from '../images/gotsite.gif';

const WorkStyle = styled.div`
    width: 100vw;
    position: relative;
    padding: 100px 0;
    
    h2 {
        text-align: center;
        display: block;
        font-family: monospace;
        font-size: 20px;
        font-weight: 100;
    }
`
const sis = {
    title:"SIS",
    description:`
    SIS is a full CRUD student information system built with Django in the backend and PostgreSQL. 
    In addition to helping the team make models, views, and unit tests in Django, 
    I worked on a integration with Slack to automatically send notifications containing 
    tomorrow's lectures, exercises and events to all cohorts. 
    It is a custom management command uses a built-in ORM to fetch and compile data 
    to be sent via HTTP Request calls to a custom Slack App triggered by a cronjob. 
    `,
    skills:["Python", "Django", "PostgreSQL", "cron"],
    githubLink:"",
    liveLink:""
}

const jobly = {
    title:"Jobly",
    description:`
    Jobly is a fullstack React frontend and Node.js/Express.js backend LinkedIn clone. 
    It allows a user to signup/login and search and apply for jobs. 
    The PostgreSQL database stores user information. 
    The app features the ability to register an account, login and view jobs that the user applied for. 
    Styling in ReactStrap and Bootstrap.`,
    skills:["Javascript", "React", "Node.js", "Express.js", "PostgreSQL"],
    githubLink:"https://github.com/sangzc/react-jobly",
    liveLink:""
}

const warbler = {
    title:"Warbler",
    description:`
    I built a server-side rendered Twitter clone in Flask. 
    This project uses server-side rendering and HTML templates. 
    This app features the ability to sign up with a password protected account, 
    edit profile, write posts, like posts, and follow users.
    Full unit and integration tests written with the Python standard library unittest module. 
    Passwords encrypted and stored in database.`,
    skills:["Python", "Flask", "Jinja", "HTML5"],
    githubLink:"https://github.com/chengsig/warbler",
    liveLink:"http://pizzawarbler.herokuapp.com/"
}

const memorygame = {
    title:"The North Remembers",
    description:`
    This is a mobile-ready responsive memory card game for fans of the show Game of Thrones. 
    Try to see if you can beat the best score of 24!`,
    skills:["JavaScript", "HTML3", "CSS"],
    githubLink:"https://github.com/sangzc/memory_game",
    liveLink:"https://vigorous-joliot-745d43.netlify.com/"
}

class Work extends Component {
    render() {
        return (
            <WorkStyle className="Work">
                <h2>Work.</h2>
                <ProjectCard 
                    title={sis.title} 
                    description={sis.description}
                    skills={sis.skills}
                    githubLink={sis.githubLink}
                    liveLink={sis.liveLink}
                    imgsrc={sisIMG} 
                />
                <ProjectCard 
                    title={jobly.title} 
                    description={jobly.description}
                    skills={jobly.skills}
                    githubLink={jobly.githubLink}
                    liveLink={jobly.liveLink}
                    titleimgsrc={whatsappIMG}
                />
                <ProjectCard 
                    title={warbler.title} 
                    description={warbler.description}
                    skills={warbler.skills}
                    githubLink={warbler.githubLink}
                    liveLink={warbler.liveLink}
                    imgsrc={whatsappIMG}
                />
                <ProjectCard 
                    title={memorygame.title} 
                    description={memorygame.description}
                    skills={memorygame.skills}
                    githubLink={memorygame.githubLink}
                    liveLink={memorygame.liveLink}
                    imgsrc={gotIMG}
                />
            </WorkStyle>
        );
    }
}

export default Work;