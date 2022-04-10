import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';





import Welcome from "./Screens/Welcome.js"
import Game from "./Screens/Game.js"
import GameOver from "./Screens/GameOver.js"
import Learn from "./Screens/Learn.js"






function MainApp() {



  // if their is no user authenticated, return login page

    return (<BrowserRouter>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/Game">
        <Game />
      </Route>
      <Route path="/GameOver">
        <GameOver />
      </Route>
      <Route path="/Learn">
        <Learn />
      </Route>
    </BrowserRouter>);
  


}

export default MainApp;
