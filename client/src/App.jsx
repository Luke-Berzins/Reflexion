import React from "react";

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

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Reflexion</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/register">Register</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/builder">Builder</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/session">Session</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
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
