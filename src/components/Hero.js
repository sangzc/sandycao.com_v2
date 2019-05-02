import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div id="Hero">
                <h1>Sandy Cao</h1>
                This is me.
                I'm a designer, explain it like i'm fiver, and web developer.
                <br />
                <img 
                    style={{width: 500}}
                    src="https://sandycao.com/images/flossin.JPG" 
                    alt="sandy flossing"
                />
            </div>
        );
    }
}

export default Hero;