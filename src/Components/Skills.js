import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import HTML from "../Assets/icon_HTML.png";
import JS from "../Assets/icon_javascript.png";
import JSReact from "../Assets/icon_react.png";
import Ruby from "../Assets/icon_ruby.png";
import Rails from "../Assets/icon_Rails.png";
import Jest from "../Assets/jest.png";
import RSpec from "../Assets/rspec_icon.png";
import PostgreSQL from "../Assets/postgresql.png";
import Git from "../Assets/Git_icon.png";
import Detox from '../Assets/DetoxLogo.png'
import Zoom from 'react-reveal/Zoom';

const Skills = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

        return (
            <div id="skills">

                <Zoom delay={700} cascade>
                <div className="skills-box">
                    <h2 className="header">Skills</h2>
                    <h3 className="skill-header">Languages</h3>
                    <div className="mini-skill-box">


                        <div className="skill-box">
                            <h4 className="icon-title">JavaScript</h4>
                            <img id="Popover1" className="icon" src={JS} alt="JavaScript Icon"/>
                        </div>

                        <div className="skill-box">
                            <h4 className="icon-title">Ruby</h4>
                            <img id="Popover2" className="icon-special" src={Ruby} alt="Ruby Icon"/>
                        </div>

                        <div className="skill-box">
                            <h4 className="icon-title">HTML & CSS</h4>
                            <img id="Popover3" className="icon" src={HTML} alt="HTML Icon"/>
                        </div>
                    </div>

                    <h3 className="skill-header">Frameworks</h3>
                    <div className="mini-skill-box">

                        <div className="skill-box">
                            <h4 className="icon-title">React</h4>
                            <img id="Popover4" className="icon" src={JSReact} alt="JavaScript React Logo"/>
                        </div>

                        <div className="skill-box">
                            <h4 className="icon-title">Rails</h4>
                            <img id="Popover5" className="icon-special" src={Rails} alt="Rails Icon"/>
                        </div>
                    </div>

                    <h3 className="skill-header">Databases</h3>
                    <div className="mini-skill-box">

                        <div className="skill-box">
                            <h4 className="icon-title">PostgreSQL</h4>
                            <img id="Popover6" className="icon-special" src={PostgreSQL} alt="PostgreSQL Logo"/>
                        </div>

                    </div>

                    <h3 className="skill-header">Testing</h3>
                    <div className="mini-skill-box">

                        <div className="skill-box">
                            <h4 className="icon-title">Jest</h4>
                            <img id="Popover7" className="icon-special" src={Jest} alt="Jest Logo"/>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover7" toggle={toggle} trigger="focus">
                                <PopoverHeader>Jest</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>

                        <div className="skill-box">
                            <h4 className="icon-title">Rspec</h4>
                            <img id="Popover8" className="icon-special" src={RSpec} alt="RSpec Logo"/>
                        </div>

                        <div className="skill-box">
                            <h4 className="icon-title">Detox</h4>
                            <img id="Popover9" className="icon-special" src={Detox} alt="Detox Logo"/>
                        </div>
                    </div>

                    <h3 className="skill-header">Version Control</h3>
                    <div className="mini-skill-box">

                        <div className="skill-box">
                            <h4 className="icon-title">Git</h4>
                            <img id="Popover10" className="icon-special" src={Git} alt="Git Logo"/>
                        </div>
                    </div>
                </div>
                </Zoom>
            </div>
        );
}

  export default Skills;



