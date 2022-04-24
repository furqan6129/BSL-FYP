import React, { Component } from "react";
import App from "../App.js"
import Header from "../Header.js"
import 'bootstrap/dist/css/bootstrap.css';
import GameOver from "./GameOver.js"


let classesList=Array(1,2,3,4,5);
let classListAlphabets=Array("A","B","C","D","E","F");


class Game extends Component{

        state = {
          score: 0 ,challenge:classesList[Math.floor(Math.random()*classesList.length)], timer:120,
        };

        generateNewChallenge(){
            this.setState({ challenge: classesList[Math.floor(Math.random()*classesList.length)]} )
        };

        componentDidMount() {
            this.timer = setInterval(() => {
                let { timer: timer } = this.state;
                this.setState({
                    timer: timer - 1
                })
            }, 1000)
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevState.timer !== this.state.timer && this.state.timer === 0) {
                clearInterval(this.timer);
    
            }
        }


        fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }



        constructor(){
            super();
            this.generateNewChallenge=this.generateNewChallenge.bind(this);



        }





        incrementScore(){
            this.setState({score: this.state.score + 1 })
        }


    render(){

        if (this.state.timer===0){

            return (
                <GameOver score={this.state.score}></GameOver>
            )
        }
        else{

        return (

        <div>
            {/* Score is: {this.state.score}
            <span>Challenge is: {this.state.challenge}</span> */}
            <Header
                score={this.state.score}
                // challenge={ this.state.challenge}
                challenge={classListAlphabets[this.state.challenge-1]}
                count={this.fmtMSS(this.state.timer)}
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





}
export default Game