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
import Zoom from 'react-reveal/Zoom';

const Skills = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
      
    const toggle = () => setPopoverOpen(!popoverOpen);
      
        return (
            <div id="skills">

                <h2 className="header">Skills</h2>
                <Zoom delay={700} cascade>
                <div className="skills-box">
                    <h3 className="skill-header">Languages</h3>
                    <div className="mini-skill-box">
                        

                        <div className="skill-box">
                            <h4 className="icon-title">JavaScript</h4>
                            <img id="Popover1" className="icon" src={JS} alt="JavaScript Icon"/>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle} trigger="focus">
                                <PopoverHeader>JavaScript</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>

                        <div className="skill-box">
                            <h4 className="icon-title">Ruby</h4>
                            <img id="Popover2" className="icon-special" src={Ruby} alt="Ruby Icon"/>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover2" toggle={toggle} trigger="focus">
                                <PopoverHeader>Ruby</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>

                        <div className="skill-box">
                            <h4 className="icon-title">HTML & CSS</h4>
                            <img id="Popover3" className="icon" src={HTML} alt="HTML Icon"/>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover3" toggle={toggle} trigger="focus">
                                <PopoverHeader>HTML & CSS</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>
                    </div>
                    
                    <h3 className="skill-header">Frameworks</h3>
                    <div className="mini-skill-box"> 

                        <div className="skill-box">
                            <h4 className="icon-title">React</h4>
                            <img id="Popover4" className="icon" src={JSReact} alt="JavaScript React Logo"/>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover4" toggle={toggle} trigger="focus">
                                <PopoverHeader>React</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>

                        <div className="skill-box">
                            <h4 className="icon-title">Rails</h4>
                            <img id="Popover5" className="icon-special" src={Rails} alt="Rails Icon"/>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover5" toggle={toggle} trigger="focus">
                                <PopoverHeader>Rails</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>
                    </div>

                    <h3 className="skill-header">Databases</h3>
                    <div className="mini-skill-box"> 

                        <div className="skill-box">
                            <h4 className="icon-title">PostgreSQL</h4>
                            <img id="Popover6" className="icon-special" src={PostgreSQL} alt="PostgreSQL Logo"/>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover6" toggle={toggle} trigger="focus">
                                <PopoverHeader>PostgreSQL</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
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
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover8" toggle={toggle} trigger="focus">
                                <PopoverHeader>RSpec</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>
                    </div>

                    <h3 className="skill-header">Version Control</h3>
                    <div className="mini-skill-box"> 

                        <div className="skill-box">
                            <h4 className="icon-title">Git</h4>
                            <img id="Popover7" className="icon-special" src={Git} alt="Git Logo"/>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover7" toggle={toggle} trigger="focus">
                                <PopoverHeader>Git</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>
                    </div>
                </div>
                </Zoom>
            </div>
        );
}

  export default Skills;

  
  
  