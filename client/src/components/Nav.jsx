import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Nav(props) {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/">Reflexion</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/builder">Builder</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/session">Session</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/register">Register</Link></li>
              </ul>
            </div>
          </div>
        </nav>
  )
}
