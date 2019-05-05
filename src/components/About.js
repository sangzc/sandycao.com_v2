import React, { Component } from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
    width: 100vw;
    position: relative;
    
    h2 {
        font-family: monospace;
        padding: 100px 100px 0px;
        font-family: monospace;
        font-size: 50px;
        font-weight: 100;
    }
`

class About extends Component {
    render() {
        return (
            <AboutStyle className="About">
                <h2>About.</h2>
            </AboutStyle>
        );
    }
}

export default About;