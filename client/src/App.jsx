import React from "react";
import { useCookies } from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Session from './components/Session';
import Builder from './components/Builder';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [cookies, setCookie] = useCookies(['name']);
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/builder">
            <Builder />
          </Route>
          <Route path="/session">
            <Session />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
