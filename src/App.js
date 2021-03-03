import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header.js';
import { Home } from './Home/Home.js';
import LoginPage from './AuthPages/LoginPage.js';
import SignUpPage from './AuthPages/SignUpPage.js';
import ListPage from './List/ListPage.js';
import { getUser, setUser } from './localstorage-utils';
import PrivateRoute from './components/PrivateRoute.js';

export default class App extends Component {
  state = {
    user: getUser()
  }

  handleUserChange = (user) => {
    this.setState({ user })
    setUser(user);
  }

  handleLogout = () => {
    this.handleUserChange();
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <Router>
          <Header user={user} handleLogout={this.handleLogout} />
          <Switch>
            <Route 
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <PrivateRoute 
              path="/todos"
              exact
              token={user && user.token}
              render={(routerProps) => <ListPage user={user} {...routerProps} />}
            />
            <Route 
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange}{...routerProps} />}
            />
            <Route 
              path="/signup"
              exact
              render={(routerProps) => <SignUpPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}