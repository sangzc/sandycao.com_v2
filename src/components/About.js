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
                <img 
                    style={{width: 500}} 
                    src="https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2017/08/girlgoneabroad.jpg"
                    alt=""
                />
            </AboutMeStyle>
        );
    }
}

export default About;