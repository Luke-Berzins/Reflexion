import logo from '../img/logo-small.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useCookies } from 'react-cookie';

export default function Nav(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['name', 'id']);
  const removeCook = () => {
    let name = 'name'
    let id = 'id'
    removeCookie(name)
    removeCookie(id)
    window.location = "/login"
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light" id="mainNav">
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/"><img src={logo} alt="Home"></img></Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
              {
              cookies.name ?
              <div className="navbar-nav ml-auto">
                <li className="nav-item" className="nav-link js-scroll-trigger">Hello {cookies.name}</li>
                <li className="nav-item nav-link js-scroll-trigger" onClick={removeCook}>Logout</li>
                </div>
                : <div className="navbar-nav ml-auto">
                  <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/login">Login</Link></li>
                  <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/register">Register</Link></li>
              </div>
              }
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/builder">Builder</Link></li>
                  <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/session">Session</Link></li>
                  <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>


              </ul>
            </div>
          </div>
        </nav>
  )
}
