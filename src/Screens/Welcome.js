import React, { Component } from "react";

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "./Welcome.css";



class Welcome extends Component{

render(){
    return (
     
        <div class="background">
                          <a href="/Game" class="button button4">Play</a>
                          <a href="/Learn" class="button button5">Learn</a>

        </div>
    )
}
}
export default Welcome