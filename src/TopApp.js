import React, { Component } from "react";
import App from "./App.js"
import Header from "./Header.js"
import CountDown from "./CountDown.js"
import 'bootstrap/dist/css/bootstrap.css';


let classesList=Array(1,2,3,4,5);

class TopApp extends Component{

        state = {
          score: 0 ,challenge:classesList[Math.floor(Math.random()*classesList.length)],
        };

        constructor(){
            super();
            this.generateNewChallenge=this.generateNewChallenge.bind(this);



        }



        generateNewChallenge(){
            //const challenge=classesList[Math.floor(Math.random()*classesList.length)];
            this.setState({ challenge: classesList[Math.floor(Math.random()*classesList.length)]} )

            //console.log("Generate new challenge has been called from the top class");
        };

        incrementScore(){
            this.setState({score: this.state.score + 1 })
            // window.location="/";

            
        }


    render(){

        return (

        <div>
            {/* Score is: {this.state.score}
            <span>Challenge is: {this.state.challenge}</span> */}
            <Header
                score={this.state.score}
                challenge={this.state.challenge}
            />
            <App
            challenge={this.state.challenge}
            score={this.state.score}
            newChallenge={() => this.generateNewChallenge()}
            updateScore={() => this.incrementScore()}
            
            />
        </div>
        )
    }





}
export default TopApp