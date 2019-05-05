import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectCardInfoStyle = styled.div`
    background-color: pink;
    height: 100%;
    width: 60%;
    position: absolute;
    right: 0;

    #projectCardInfoTitle {
        margin: 40px;
        font-weight: normal;
    }

    #projectCardInfoDesc {
        margin: 0 40px;
        line-height: 28px;
    }

`
class ProjectCardInfo extends Component {
    render() {
        return (
            <ProjectCardInfoStyle>
                <h1 id ="projectCardInfoTitle">Microblog</h1>
                <p id="projectCardInfoDesc">
                Travel smarter by saving the places you want to go. 
                This project was an assignment given for an interview. 
                The requirements were to build a web-app that calls the Google Places API. 
                It must include a map with pins and a list of locations, with some interactivity between the two.
                </p>
                <button></button>
                <button></button>
            </ProjectCardInfoStyle>
        );
    }
}

export default ProjectCardInfo;