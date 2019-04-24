import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll"

class Header extends Component {
    render() {
        return (
            <div>
                <Link 
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                >
                    About
                </Link> 
                Work
                Contact
            </div>
        );
    }
}

export default Header;