import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component{

render(){

    console.log('props',this.props)



    return (
        // <nav > Score is: {this.props.score}
        
        // <span>Challenge is: {this.props.challenge}</span>
        // </nav>
        <div class="container">
        <header class="d-flex justify-content-center py-2 background-color: coral;">

          <a  class="nav-link active" aria-current="page">Challenge: {this.props.challenge}</a>
          <a class="nav-link active" aria-current="page">Score: {this.props.score}</a>

        </header>
      </div>

    )
}
}
export default Header