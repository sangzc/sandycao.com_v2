import React, { Component } from 'react';
import { Link } from "react-scroll";
import styled from 'styled-components';

import * as whatsappIMG from '../images/whatsapp.png';
const RESUME_LINK = `
https://docs.google.com/viewer?url=
https://docs.google.com/document/d/
1ugpZ-7lF-vBtvHGnfHgHEL-Lky5z8Xiu4JMptxNkJak/
export?format=pdf&embedded=true#:0.page.1
`

const HeaderLinkStyle = styled.div`
    font-family: monospace;
    position: absolute;
    top: 50%;
    right: -70px;
    transform: translate(-50%, -50%);

    .navlink {
        margin: 15px;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        color: #000;
    }

    .navlink:hover {
        color: rgba(136, 206, 194)
    }

    .navlink:before {
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

    .navlink:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }

    @media screen and (min-width: 0px) and (max-width: 650px) {
        display: flex;
        justify-content: space-around;
        width: 70%;
        position: relative;
        top: 30%;
        right: 0;
        transform: none;
        width: 70%;
        margin: 0 auto;
        .navlink {
            margin: auto;
        }
    }
`

const HeaderStyle = styled.div`
    background-color: transparent;
    height: 70px;
    width: 100vw;
    position: relative;
`

class Header extends Component {
    render() {
        return (
            <HeaderStyle>
                <HeaderLinkStyle>
                    <Link 
                        to="Work"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={60}
                        duration={500} 
                        className="navlink"
                    >
                        Work.
                    </Link> 
                    <Link 
                        to="Contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={60}
                        duration={500} 
                        className="navlink"
                    >
                        Contact. 
                    </Link> 
                    <a 
                        className="navlink"
                        target="_blank"
                        href={RESUME_LINK}
                    >
                        Resume. 
                    </a>
                </HeaderLinkStyle>
            </HeaderStyle>
        );
    }
}

export default Header;