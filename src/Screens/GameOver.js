import React, { Component } from "react";

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "./GameOver.css";



class GameOver extends Component{

render(){
  
    return (
     
        <div class="main-body">
                     <h1>Game Over!</h1>
                     <br></br>
                     <h1 >You Scored: {this.props.score}</h1>
        </div>


    )
}

}


export default GameOver