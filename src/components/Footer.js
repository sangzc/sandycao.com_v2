import React, { Component } from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    width: 100vw;
    padding: 20px;

    p {
        text-align: center;
        font-family: monospace;
        font-size: 12px;
        color: grey;
        a {
            color: grey;
            text-decoration: none;
        }
    }
`
class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <p>
                    © Created and designed with ❤️ by <a href="http://sandycao.com">Sandy Cao</a>.
                </p>
            </FooterStyle>
        );
    }
}

export default Footer;