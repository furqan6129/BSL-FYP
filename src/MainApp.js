import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';





import Welcome from "./Welcome.js"
import TopApp from "./TopApp.js"
import GameOver from "./GameOver.js"
import Learn from "./Learn.js"






function MainApp() {



  // if their is no user authenticated, return login page

    return (<BrowserRouter>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/TopApp">
        <TopApp />
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
