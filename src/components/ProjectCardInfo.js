import React, { Component } from "react"
import styled from "styled-components"
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';

const ProjectCardInfoStyle = styled.div`
  height: 100%;
  width: 60%;
  position: absolute;
  right: 0;
  padding: 20px;
  font-size: 14px;
  font-weight: 100;
  

  #project-card-info-title {
    margin: 40px 40px 20px 40px;
    font-weight: normal;
    font-family: monospace;
    font-size: 25px;
  }

  #project-card-info-desc {
    margin: 20px 0px 20px 40px;
    line-height: 28px;
  }

  #skills-container {
    margin: 20px 40px 20px;
  }

  .skill {
    font-family: monospace;
    display: inline-block;
    border-radius: 5px;
    border: 2px solid rgb(136, 206, 194);
    margin: 5px 10px 5px 0px;
    padding: 8px;
  }

  #project-links {
    margin: 0px 40px;

    button {
      color: white;
      border-radius: 5px;
      padding: 15px 20px;
      margin: 0 20px 0 0;
      font-weight: normal;
      overflow: hidden;
      cursor: pointer;
      outline: none;
      border: none;
      transition: all .3s ease-out;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.225);
      user-select: none;
      z-index: 1;

      &:hover {
        text-decoration: none;
        box-shadow: 0 4px 10px 0px rgba(0,0,0,0.225);
      }
    }

    #live-demo-btn {
      background-color: #ea8800;
    }

    #view-src-btn {
      background-color: rgba(255,255,255,0.4);
      color: #ea8800;
    }
  }

`

class ProjectCardInfo extends Component {
  render() {
    return (
      <ProjectCardInfoStyle>
        <h1 id="project-card-info-title">Microblog</h1>
        <p id="project-card-info-desc">
          Travel smarter by saving the places you want to go. This project was
          an assignment given for an interview. The requirements were to build a
          web-app that calls the Google Places API. It must include a map with
          pins and a list of locations, with some interactivity between the two.
        </p>
        <div id="skills-container">
          <div class="skill">HTML5</div>
          <div class="skill">CSS3</div>
          <div class="skill">JavaScript</div>
          <div class="skill">ReactJS</div>
          <div class="skill">Redux</div>
        </div>
        <div id="project-links">
          <button id="live-demo-btn">
            Live Demo <FaExternalLinkAlt />
          </button>
          <button id="view-src-btn">
            View Source <FaGithub />
          </button>
        </div>
      </ProjectCardInfoStyle>
    )
  }
}

export default ProjectCardInfo
