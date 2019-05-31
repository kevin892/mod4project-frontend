import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SignIn from './SignIn';
import ProjectForm from './ProjectForm'
import MainComponent from './MainComponent'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/signin" component={SignIn} />
      <Route path="/create" component={App} />
      <Route path="/apis" component={MainComponent} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
