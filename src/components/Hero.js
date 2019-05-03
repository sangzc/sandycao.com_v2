import React, { Component } from 'react';
import styled from 'styled-components';

const HeroStyle = styled.div`
    height: calc(100vh - 70px);
    width: 100vw;
    position: relative;

    img {
        max-width: 300px;
        position: absolute;
        top: 30%;
        left: 10%;
    }

    p {
        position: absolute;
        top: 53%;
        left: 45%;
        max-width: 400px;
        font-size: 16px;
    }
`
const TypeWriter = styled.div`
    @keyframes typing {
        from { 
            width: 0% 
        }
        to { 
            width: 100% 
        }
    }

    @keyframes blink {
        from, to { 
            border-color: transparent 
        }
        50% { 
            border-color: orange; 
        }
    }

    h1 {
        font-family: monospace;
        position: absolute;
        top: 45%;
        left: 45%;
        display: inline-block;
        overflow: hidden;
        letter-spacing: 2px;
        animation: typing 5s steps(30, end), blink .75s step-end infinite;
        white-space: nowrap;
        font-size: 50px;
        font-weight: 200;
        border-right: 30px solid orange;
        box-sizing: border-box;
        letter-spacing: normal;
    }
`

class Hero extends Component {
    render() {
        return (
            <HeroStyle>
                <TypeWriter>
                    <h1>> sandy cao</h1>
                </TypeWriter>
                <img 
                    style={{width: 500}}
                    src="https://sandycao.com/images/flossin.JPG" 
                    alt="sandy flossing"
                />
                <p>
                    I'm a software engineer based in San Francisco, CA.
                    <br />
                    Specializing in building and sometimes designing
                    simple corners of the internet.
                </p>
            </HeroStyle>
        );
    }
}

export default Hero;