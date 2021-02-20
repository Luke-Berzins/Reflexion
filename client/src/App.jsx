import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";
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
import Yoursessions from './components/Yoursessions';

function App() {
  const [cookies, setCookie] = useCookies(['name']);
  const [state, setState] = useState({
    poses: [],
    currentSession: null
  })

  useEffect(() => {
    Promise.all([
      axios.get("/api/poses"),
    ]).then((all) => {
      setState({poses: all[0].data.poses});
    })
  }, []);

  return (

    <Router>
      <div>
        <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/yoursessions">
              <Yoursessions />
            </Route>
            <Route path="/builder" >
              <Builder poses={state.poses} />
            </Route>
            <Route path="/session/:id">
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
