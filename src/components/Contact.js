import React, { Component } from 'react';
import styled from 'styled-components';

const ContactStyle = styled.div`
    width: 100vw;
    padding: 100px 0 200px 0;
    position: relative;

    h2 {
        text-align: center;
        display: block;
        font-family: monospace;
        font-size: 20px;
        font-weight: 100;
        position: relative;
    }

    a {
        text-decoration: none;
        color: #000;
        position: relative;
    }
    
    a:hover {
        color: rgba(136, 206, 194)
    }

    a:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5px;
        bottom: 0;
        left: 0;
        background-color: orange;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    a:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`

class Contact extends Component {
    render() {
        return (
            <ContactStyle className="Contact">
                <h2>
                    Let's work together 
                    <br />
                    <br />
                    <a href = "mailto: sangzicao@gmail.com">sangzicao@gmail.com</a>
                </h2>
            </ContactStyle>
        );
    }
}

export default Contact;