import React, { Component } from 'react';
import styled from 'styled-components';

const HeroStyle = styled.div`
    height: calc(100vh - 70px);
    width: 100vw;
    position: relative;

    img {
        max-width: 400px;
        position: absolute;
        top: 5%;
        left: 15%;
        border-top: 10px solid white;
        border-right: 10px solid white;
        border-left: 10px solid white;
        border-bottom: 100px solid white;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    p {
        position: absolute;
        top: 45%;
        left: 50%;
        max-width: 400px;
        font-size: 16px;
        line-height: 28px;
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
        top: 35%;
        left: 50%;
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
                    <h1>> Sandy Cao</h1>
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