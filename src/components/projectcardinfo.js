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

    .button {
      text-decoration: none;
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

  @media screen and (max-width: 1150px) and (min-width: 501px) {
    width: 100%;
    height: 50%;
    margin: 0px;
    padding: 15px;
    position: absolute;
    bottom: 0;

    #project-card-info-desc {
      line-height: 1.5;
      margin: 0px;
    }

    #project-links {
      margin: 15px 0;

      .button {
        padding: 10px 10px;
        margin: 0 15px 0 0 ;
      }

    }

    #skills-container {
      font-size: 12px;
      margin: 0px;
    }

    #project-card-info-title {
      margin: 0;
      font-size: 18px;
      padding: 0 0 10px;
    }
    
    #project-card-info-desc {
      margin: 0;
      font-size: 12px;
      padding: 0 0 10px;
    }

  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 12.5px;
    #project-card-info-desc {
      line-height: 1.5;
      margin: 20px;
    }

    #project-links {
      margin: 0px 20px;
    }

    #skills-container {
      margin: 20px;
    }

    #project-card-info-title {
      margin: 20px;
    }

    .button {
      padding: 15px 20px;
      margin: 0;
    }
  }
`

class ProjectCardInfo extends Component {
  render() {
    
    const {
            title, 
            description, 
            skills,
            githubLink,
          } = this.props;
    
    const liveLink = (this.props.liveLink !== "") ? 
      (<a href={this.props.liveLink} className="button" id="live-demo-btn">
        Live Demo <FaExternalLinkAlt />
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
          <a href={githubLink} className="button" id="view-src-btn">
            View Source <FaGithub />
          </a>
        </div>
      </ProjectCardInfoStyle>
    )
  }
}

export default ProjectCardInfo
