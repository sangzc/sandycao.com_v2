import React, { Component } from "react"
import styled from "styled-components"
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';

const ProjectCardInfoStyle = styled.div`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  font-weight: 100;
  margin: 0px;

  #project-card-info-title {
    margin: 20px;
    font-weight: normal;
    font-family: monospace;
    font-size: 25px;
  }

  #project-card-info-desc {
    margin: 20px;
    line-height: 1.5;
    // line-height: 28px;
  }

  #skills-container {
    margin: 20px;
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
    margin: 0px 20px;

    .button {
      display: inline-block;
      width: 140px;
      text-decoration: none;
      color: white;
      border-radius: 5px;
      padding: 15px 20px;
      margin: 10px 20px 0 0;
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

  @media screen and (min-width: 769px) {
    
  }

`

class ProjectCardInfo extends Component {

  render() {
    const {
            title, 
            description, 
            skills,
          } = this.props;
    
    const liveLink = (this.props.liveLink !== "") ? 
      (<a href={this.props.liveLink} className="button" id="live-demo-btn">
        Live Demo <FaExternalLinkAlt />
      </a>) : "";

    const githubLink = (this.props.githubLink !== "") ? 
      (<a href={this.props.githubLink} className="button" id="view-src-btn">
        View Source <FaGithub />
      </a>) : "";
    
    return (
      <ProjectCardInfoStyle>
        <h1 id="project-card-info-title">{title}</h1>
        <p id="project-card-info-desc">
          {description}
        </p>
        <div id="skills-container">
          {skills.map(skill => <div className="skill">{skill}</div>)}
        </div>
        <div id="project-links">
          {liveLink}
          {githubLink}
        </div>
      </ProjectCardInfoStyle>
    )
  }
}

export default ProjectCardInfo
