import React, { Component } from 'react';
import { Link } from "react-scroll";
import styled from 'styled-components';

const HeaderLinkStyle = styled.div`
    color: white;
    position: absolute;
    top: 50%;
    right: -60px;
    transform: translate(-50%, -50%);
    a {
        padding: 15px;
    }
`

class Header extends Component {
    render() {
        return (
            <HeaderLinkStyle>
                <Link 
                    to="About"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                >
                    About 
                </Link> 
                <Link 
                    to="Work"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                >
                    Work
                </Link> 
                <Link 
                    to="Contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                >
                    Contact 
                </Link> 
            </HeaderLinkStyle>
        );
    }
}

export default Header;