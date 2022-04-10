import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.css";
import GameOver from "./Screens/GameOver.js"

class Header extends Component{


  state = {
    time: 10,
  };

  setTime(){
    this.setState({time: this.getData() })
    }

  getData(val){
    // do not forget to bind getData in constructor
    console.log("Logged Value: "+val)
    // if (this.state.time!=val){
    //   this.setTime();
    // }
    return val;
}


checkUpdate(){

  if (this.getData()!=this.state.time){
    this.setTime();
  }
}

render(){
this.getData();

  console.log("Time is: "+this.state.time);

    if (this.state.time===0){
      return (<GameOver score={this.props.score}
        />)
    }

else{

    return (
        // <nav > Score is: {this.props.score}
        
        // <span>Challenge is: {this.props.challenge}</span>
        // </nav>
        <div class="container">
        <header class="d-flex justify-content-center py-3;">

          <a  class="nav-link active" aria-current="page">Challenge: {this.props.challenge}</a>
          <a class="nav-link active" aria-current="page">Score: {this.props.score}</a>
          <a  class="nav-link active" aria-current="page">Time Remaining: {this.props.count}</a>


        </header>
   
      </div>

    )
  }
}
}
export default Header