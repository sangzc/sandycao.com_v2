import React, { Component } from 'react';

import styled from 'styled-components';
import ProjectCardInfo from './projectcardinfo';

const ProjectCardStyle = styled.div`
    width: 90%;
    min-height: 80vh;
    margin: 120px auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    background-color: rgba(255,255,255,.88);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 2px 6px rgba(0,0,0,0.23);
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
            
    img {
        filter: grayscale(100%) brightness(.9);
        transition: filter .4s;
        width: 100%;
        height: 50%;
        object-fit: cover;
    }

    img:hover {
        filter: none;
    }

    
    ::before {
        position: absolute;
        top: -40px;
        left: 0;
        z-index: 1;
        height: 40px;
        width: 250px;
        font-family: monospace;
        content: '';
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: rgba(221,221,221,.66);
    }
    
    @media screen and (min-width: 1018px) {
        width: 55rem;
        img {
            height: 500px;
        }
    }

    @media screen and (max-width: 650px){
        img {
            height: 250px;
        }
    }

`

class ProjectCard extends Component {
    render() {
        return (
            <ProjectCardStyle>
                <img src={this.props.imgsrc} />
                <ProjectCardInfo 
                    title={this.props.title} 
                    description={this.props.description}
                    skills={this.props.skills}
                    githubLink={this.props.githubLink}
                    liveLink={this.props.liveLink}
                />
            </ProjectCardStyle>
        );
    }
}

export default ProjectCard;