import React, { Component } from "react";
import App from "./App.js"

let classesList=Array(1,2,3,4,5,6);

class TopApp extends Component{

        state = {
          score: '0',challenge:classesList[Math.floor(Math.random()*classesList.length)],
        };

        constructor(){
            super();
            this.generateNewChallenge=this.generateNewChallenge.bind(this);



        }



        generateNewChallenge(){
            //const challenge=classesList[Math.floor(Math.random()*classesList.length)];
            this.setState({ challenge: classesList[Math.floor(Math.random()*classesList.length)]} )

            console.log("Generate new challenge has been called from the top class");
        };


    render(){

        return (

        <div>
            Score is: {this.state.score}
            <span>Challenge is{this.state.challenge}</span>
            <App
            challenge={this.state.challenge}
            score={this.state.score}
            newChallenge={() => this.generateNewChallenge()}
            
            />
        </div>
        )
    }





}
export default TopApp