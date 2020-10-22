import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from './components/alerts'

import * as serviceWorker from './serviceWorker';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options} >
    <App />
  </AlertProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
