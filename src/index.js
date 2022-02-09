import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopApp from './TopApp';
import Welcome from './Welcome';
import MainApp from './MainApp';
import GameOver from './GameOver';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);