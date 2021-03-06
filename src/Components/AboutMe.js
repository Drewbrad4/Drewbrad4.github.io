import React, { Component } from 'react';
import Resume from "./Resume";
import Headshot from "../Assets/Drew Headshot.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default class AboutMe extends Component{
    render(){
        return (
            <div id="about">
                <div class="headshot-box">

                    <img className="headshot" src={Headshot} alt="Drew Bradford Headshot"/>

                    <div className="mini-links">
                        <a href="https://www.linkedin.com/in/drewbrad4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="5x" className="mini-links" /></a>
                        <a href="https://github.com/Drewbrad4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="5x" className="mini-links" /></a>
                    </div>
                </div>
                <div className="text-box">
                    <h2 className="header">About Me</h2>
                    <br />

                    <h3 className="about-text">I'm an alum of Vanguard University, I have my BA in Marketing. I’m a current student at LEARN Academy, learning full-stack web development. I’m also an actor around San Diego! </h3><br />

                    <h3 className="about-text">I was getting work as an actor but finding it difficult to find a Marketing job that allowed me to continue to perform. So I was lucky enough to find a very flexible job working in Manufacturing soldering circuit boards for water quality monitors. I learned a TON about quickly picking up new skills as I had no previous soldering experience but was taught everything on the job and picked it up fast.</h3> <br />

                    <h3 className="bottom-about">With COVID unfortunately removing theater for the time being, I felt it was an excellent time to transition to a career I had more interest in. I have always had a passion for tech in general and I felt coding helped blend my analytical side with all the creative avenues I have in my life. I am getting a comprehensive full stack education at LEARN and getting a lot of project-based learning experience and I’m loving every minute of it. Planned graduation is February 2020.</h3>


                    <Resume />

                </div>
            </div>
        );
    }
  }