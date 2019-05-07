import React, { Component } from 'react';
import styled from 'styled-components';
import {MdPlace} from 'react-icons/md';

const HeroStyle = styled.div`
    height: calc(100vh - 70px);
    width: 100vw;
    position: relative;

    p {
        position: absolute;
        bottom 20px;
        left: 15px;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: .5px;
    }
`
const ImageContainer = styled.div`
    height: 500px;
    width: 400px;
    position: relative;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    padding: 15px;

    img {
        display: block;
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
        bottom: 20px;
        right: 15px;
        display: inline-block;
        overflow: hidden;
        letter-spacing: 2px;
        animation: typing 5s steps(30, end), blink .75s step-end infinite;
        white-space: nowrap;
        font-size: 20px;
        font-weight: 200;
        border-right: 12px solid orange;
        box-sizing: border-box;
        letter-spacing: normal;
    }

`

class Hero extends Component {
    render() {
        return (
            <HeroStyle>
                <ImageContainer>
                    <img 
                        style={{width: 500}}
                        src="https://sandycao.com/images/flossin.JPG" 
                        alt="sandy flossing"
                    />
                    <div>
                        <TypeWriter>
                            <h1>> Sandy Cao</h1>
                        </TypeWriter>
                    </div>
                    <p>
                        Software Engineer
                        <br/>
                        Builder of things.
                        <br/>
                        Dog fan.
                        <br/>
                        <br/>
                        <MdPlace /> San Francisco, CA
                    </p>
                </ImageContainer>
            </HeroStyle>
        );
    }
}

export default Hero;