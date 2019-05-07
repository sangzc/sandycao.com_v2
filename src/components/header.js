import React, { Component } from 'react';
import { Link } from "react-scroll";
import styled from 'styled-components';

const HeaderLinkStyle = styled.div`
    font-family: monospace;
    position: absolute;
    top: 50%;
    right: -60px;
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
                    {/* <Link 
                        to="About"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                    >
                        About. 
                    </Link>  */}
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
                        href="">
                        Resume. 
                    </a>
                </HeaderLinkStyle>
            </HeaderStyle>
        );
    }
}

export default Header;