import React, { Component } from 'react';

import styled from 'styled-components';
import ProjectCardInfo from './ProjectCardInfo';

const ProjectCardStyle = styled.div`
    height: 70vh;
    width: 75vw;
    background-color: rgba(255,255,255,.88);
    margin: 120px auto;
    padding: 0px 20px 20px 20px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 2px 6px rgba(0,0,0,0.23);
    position: relative;

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

    #img-container {
        width: 40%;
        height: 100%;
        position: absolute;
        display: grid;
        align-items: center;
        justify-items: center;

        img {
            filter: grayscale(100%) brightness(.9);
            transition: filter .4s;
        }

        img:hover {
            filter: none;
        }
    }
`

class ProjectCard extends Component {
    render() {
        return (
            <ProjectCardStyle>
                <div id="img-container">
                    <img src={this.props.imgsrc} />
                </div>
                <ProjectCardInfo />
            </ProjectCardStyle>
        );
    }
}

export default ProjectCard;