import React, { Component } from "react";
import App from "./App.js"
import Header from "./Header.js"
import 'bootstrap/dist/css/bootstrap.css';
import GameOver from "./GameOver.js"


let classesList=Array(1,2,3,4,5);

class TopApp extends Component{

        state = {
          score: 2 ,challenge:classesList[Math.floor(Math.random()*classesList.length)], count:5,
        };


        componentDidMount() {
            this.timer = setInterval(() => {
                let { count } = this.state;
                this.setState({
                    count: count - 1
                })
            }, 1000)
        }


        componentDidUpdate(prevProps, prevState, snapshot) {
            //console.log("Score from Countdown is:"+this.props.score)
    
            // if (this.state.count===0){
            //     //this.updateEnd()
            //     window.location="/GameOver";
            // }
    
            if (prevState.count !== this.state.count && this.state.count === 0) {
                clearInterval(this.timer);
    
            }
        }


        fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }



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

        if (this.state.count===0){

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
                challenge={this.state.challenge}
                count={this.fmtMSS(this.state.count)}
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
export default TopApp