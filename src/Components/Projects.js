import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Badge } from 'reactstrap';
import Warzone from "../Assets/warzonePlunder img.png"
import HighLow from "../Assets/HighorLow img.png"
import JSDrum from "../Assets/JS-Drum-Kit img.png"
import PartyPlanner from "../Assets/PartyPlanner.png"
import TicTacToe from "../Assets/TicTacToe.png"

const Projects = (props) => {
    return (
    <div id="projects">

        <h2 className="header">Projects</h2>

        <div className="card-box">    

            <Card>
                <a href="https://drewbrad4.github.io/warzoneplunder/" target="_blank" rel="noopener noreferrer">
                    <CardImg src={Warzone} alt="Card image cap" />
                </a>
                <CardBody>
                <CardTitle>Warzone Plunder</CardTitle>
                <CardSubtitle><Badge color="info">HTML</Badge><Badge color="info">CSS</Badge><Badge color="info">JS</Badge> <a href="https://github.com/Drewbrad4/warzoneplunder" target="_blank" rel="noopener noreferrer"><Badge className="sizing float-right">View Repo</Badge></a></CardSubtitle>
                <CardText>A treasurehunt webgame. Get as much cash as you can and get that Chicken Dinner before your turns run out!</CardText>
                </CardBody>
            </Card>

            <Card>
                <a href="https://drewbrad4.github.io/HighorLow/" target="_blank" rel="noopener noreferrer">
                    <CardImg src={HighLow} alt="Card image cap" />
                </a>
                <CardBody>
                <CardTitle>High or Low</CardTitle>
                <CardSubtitle><Badge color="info">HTML</Badge><Badge color="info">CSS</Badge><Badge color="info">JS</Badge><a href="https://github.com/Drewbrad4/HighorLow" target="_blank" rel="noopener noreferrer"><Badge className="sizing float-right">View Repo</Badge></a></CardSubtitle>
                <CardText>A simple guessing game. Guess any number between 1 and 100. But hurry, you only have 7 guesses!</CardText>
                </CardBody>
            </Card>

            <Card>
                <a href="https://drewbrad4.github.io/JS-Drum-Kit/" target="_blank" rel="noopener noreferrer">
                    <CardImg src={JSDrum} alt="Card image cap" />
                </a>
                <CardBody>
                <CardTitle>JS Drum Kit</CardTitle>
                <CardSubtitle><Badge color="info">HTML</Badge><Badge color="info">CSS</Badge><Badge color="info">JS</Badge><a href="https://github.com/Drewbrad4/JS-Drum-Kit" target="_blank" rel="noopener noreferrer"><Badge className="sizing float-right">View Repo</Badge></a></CardSubtitle>
                <CardText>A drum kit inside your web browser! Rock on! Just be careful not to hit those keys too hard...</CardText>
                </CardBody>
            </Card>

            <Card>
                <a href="https://drewbrad4.github.io/PartyPlanner/" target="_blank" rel="noopener noreferrer">
                    <CardImg src={PartyPlanner} alt="Card image cap" />
                </a>
                <CardBody>
                <CardTitle>Party Planner</CardTitle>
                <CardSubtitle><Badge color="info">React</Badge><Badge color="info">HTML</Badge><Badge color="info">CSS</Badge><Badge color="info">JS</Badge><a href="https://github.com/Drewbrad4/PartyPlanner" target="_blank" rel="noopener noreferrer"><Badge className="sizing float-right">View Repo</Badge></a></CardSubtitle>
                <CardText>A Party Planner application utilizing React. Set a budget and add items to your cart. Be notified if you exceed your budget.</CardText>
                </CardBody>
            </Card>

            <Card>
                <a href="https://drewbrad4.github.io/TicTacToe/" target="_blank" rel="noopener noreferrer">
                    <CardImg src={TicTacToe} alt="Card image cap" />
                </a>
                <CardBody>
                <CardTitle>Tic Tac Toe</CardTitle>
                <CardSubtitle><Badge color="info">React</Badge><Badge color="info">HTML</Badge><Badge color="info">CSS</Badge><Badge color="info">JS</Badge><a href="https://github.com/Drewbrad4/TicTacToe" target="_blank" rel="noopener noreferrer"><Badge className="sizing float-right">View Repo</Badge></a></CardSubtitle>
                <CardText>A Tic Tac Toe game built with React. Find a friend! Defeat them!</CardText>
                </CardBody>
            </Card>

        </div>
    </div>    
    );
  };
  
  export default Projects;