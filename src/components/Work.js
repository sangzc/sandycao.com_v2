import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import * as whatsappIMG from '../images/whatsapp.png';

const WorkStyle = styled.div`
    width: 100vw;
    position: relative;
    
    h2 {
        padding: 175px 100px 50px;
        font-family: monospace;
        font-size: 50px;
        font-weight: 100;
    }
`

class Work extends Component {
    render() {
        return (
            <WorkStyle className="Work">
                <h2>work</h2>
                <ProjectCard imgsrc={whatsappIMG} />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </WorkStyle>
        );
    }
}

export default Work;