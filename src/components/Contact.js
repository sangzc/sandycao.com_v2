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
            </ContactStyle>
        );
    }
}

export default Contact;