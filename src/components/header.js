import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll"

class Header extends Component {
    render() {
        return (
            <div id="Header">
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
            </div>
        );
    }
}

export default Header;