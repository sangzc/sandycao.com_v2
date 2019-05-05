import React, { Component } from 'react';

import styled from 'styled-components';
import ProjectCardInfo from './ProjectCardInfo';

const ProjectCardStyle = styled.div`
    height: 60vh;
    width: 75vw;
    background-color: #cccee0;
    margin: 120px auto;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 2px 6px rgba(0,0,0,0.23);
    position: relative;

    ::before {
        position: absolute;
        top: -40px;
        z-index: 100;
        height: 40px;
        width: 250px;
        font-family: monospace;
        content: 'hello';
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: #cccee0;
    }

    img {
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
    }
`

class ProjectCard extends Component {
    render() {
        return (
            <ProjectCardStyle>
                <img src={this.props.imgsrc}></img>
                <ProjectCardInfo />
            </ProjectCardStyle>
        );
    }
}

export default ProjectCard;