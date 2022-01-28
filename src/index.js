import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopApp from './TopApp';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);