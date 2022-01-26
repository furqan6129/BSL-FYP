import React, { Component } from "react";

class Header extends Component{



render(){

    return (

        <nav > Score is: {this.props.score}
        
        <span>Challenge is: {this.props.challenge}</span>
        </nav>







    )





}





}
export default Header