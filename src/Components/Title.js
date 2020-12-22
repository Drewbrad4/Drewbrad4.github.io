import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

export default class TitleBox extends Component{
    render(){
        return (
            <div className="title">
                <Bounce top duration={1250}>
                    <div className="title-box">
                        <h1 id="title">Drew Bradford</h1>
                        <h3 id="descrip">Full Stack Web Developer</h3>
                        <hr />
                        <div className="links">
                            <Flip cascade delay={1250} duration={1000}>
                                <a className="link" href="#about">About</a>
                                <a className="link" href="#projects">Projects</a>
                                <a className="link" href="#skills">Skills</a>
                                <a className="link" href="#contact">Contact</a>
                            </Flip>
                        </div>
                    </div>
                </Bounce>
            </div>
        );
    }
  }