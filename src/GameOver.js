import React, { Component } from "react";

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "./GameOver.css";



class GameOver extends Component{

render(){
  

    return (
     
        <div class="main-body">
                     <h1>Game Over!<br></br> You Scored: {this.prop}</h1>
        </div>


    )
}
}
export default GameOver