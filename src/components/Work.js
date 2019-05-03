import React, { Component } from 'react';
import styled from 'styled-components';

const WorkStyle = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
`

class Work extends Component {
    render() {
        return (
            <WorkStyle className="Work">
                <h2>Work</h2>
                This is my work.
                <br />
                <br />
                <img 
                    src="https://media.tenor.com/images/b00ff3cb85a45a2e03f448ba3682e7a0/tenor.png"
                    alt=""
                />
            </WorkStyle>
        );
    }
}

export default Work;