import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
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

class Work extends Component {
    render() {
        return (
            <WorkStyle className="Work">
                <h2>Work.</h2>
                <ProjectCard imgsrc={whatsappIMG} />
                <ProjectCard imgsrc={sisIMG}/>
                <ProjectCard imgsrc={gotIMG}/>
                <ProjectCard />
            </WorkStyle>
        );
    }
}

export default Work;