import React, { Component } from 'react';
import styled from 'styled-components';

const AboutMeStyle = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
`

class About extends Component {
    render() {
        return (
            <AboutMeStyle className="About">
                <h2>About Me</h2>
            </AboutMeStyle>
        );
    }
}

export default About;