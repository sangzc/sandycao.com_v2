import React, { Component } from 'react';
import styled from 'styled-components';

const ContactStyle = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
`

class Contact extends Component {
    render() {
        return (
            <ContactStyle className="Contact">
                <h2>Contact</h2>
                Here contact me at this form!
                <img 
                    src="https://pics.me.me/only-3-people-call-me-1-mom-2-wrong-number-16367288.png" 
                    alt=""
                />
            </ContactStyle>
        );
    }
}

export default Contact;