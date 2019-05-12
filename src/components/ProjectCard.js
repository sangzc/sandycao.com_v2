import React, { Component } from 'react';

import styled from 'styled-components';
import ProjectCardInfo from './projectcardinfo';

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

    @media only screen and (min-width: 769px) and (max-width: 1150px) {
        position: relative;
        padding: 0;
        height: 90vh;

        #img-container {
            top: 0px
            margin: 10px;
            overflow: hidden;
            position: absolute;
            width: 100%;
            height: 50%;
        
            img {
                margin: 0 auto;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        position: relative;
        padding: 0;
        height: 90vh;

        .img-container {
            width: 100%;
            height: 50%;
            background-color: pink;
        
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`

class ProjectCard extends Component {
    render() {
        return (
            <ProjectCardStyle>
                <div className="img-container">
                    <img src={this.props.imgsrc} />
                </div>
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