import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header.js';
import Home from './Home/Home.js';
import LoginPage from './AuthPages/LoginPage.js';
import SignUpPage from './AuthPages/SignUpPage.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <Switch>
            <Route 
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route 
              path="/todos"
              exact
              render={(routerProps) => <ListPage {...routerProps} />}
            />
            <Route 
              path="/login"
              exact
              render={(routerProps) => <LoginPage {...routerProps} />}
            />
            <Route 
              path="/signup"
              exact
              render={(routerProps) => <SignUpPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
