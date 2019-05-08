import React, { Component } from 'react';
import styled from 'styled-components';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const FooterStyle = styled.div`
    width: 100vw;
    padding: 20px;
    text-decoration: none;

    .icons-container {
        margin: 0 auto;
        display: block;
        text-align: center;
        position: relative;
    }

    .icon {
        font-size: 32px;
        margin: 15px;
        color: rgba(0,0,0,.8);
    }

    .icon:hover {
        color: rgba(136, 206, 194, .8)
    }

    .icon:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5px;
        bottom: 0;
        left: 0;
        background-color: orange;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    .icon:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }

    p {
        margin: 20px 0 0 0;
        text-align: center;
        font-family: monospace;
        font-size: 12px;
        color: grey;
        a {
            color: grey;
        }
    }
`
class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <div className="icons-container">
                    <a href="https://www.instagram.com/sangzi/" >
                        <FaInstagram className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/sandy-cao/" >
                        <FaLinkedin className="icon"/>  
                    </a>
                    <a href="https://github.com/sangzc">
                        <FaGithub className="icon"/>
                    </a>
                </div>
                <p>
                    Created and designed with ❤️ by <a href="http://sandycao.com">Sandy Cao</a>. © 2019
                </p>
            </FooterStyle>
        );
    }
}

export default Footer;