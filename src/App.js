import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';



export default class App extends Component{

  onSubmit = (e) => {
    e.preventDefault()// Prevents default refresh by the browser
    emailjs.sendForm('gmail', 'default_template', e.target, 'user_ekwIbNldPEmKcGuU0ZHXX')
    .then(result => {
    alert('Message Sent!', result.text);
    },
    error => {
    alert( 'An error occured, Plese try again',error.text)
    })
  }

  render(){
    return (
      <div className = "app">
        
        <Title />
        
        <Navbar />

        <Zoom duration={1200} delay={200}>
          <AboutMe />
        </Zoom>

        <Roll right>
          <Projects />
        </Roll>

        <Fade bottom>
          < Skills />
        </Fade>

        <Contact 
        onSubmit = {this.onSubmit}
        />
      </div>
    );
  }
}


