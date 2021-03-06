import './Nav.scss';
import logo from '../img/logo-small.png';
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
    <nav className="navbar navbar-expand-lg fixed-top navbar-light" id="mainNav">
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/"><img src={logo} alt="Home"></img></Link>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-itemt"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/builder">New Session</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/yoursessions">My Sessions</Link></li>
                <div className="navbar-nav ml-auto">
                <li className="nav-item" className="nav-link js-scroll-trigger text-secondary"><b>Hello <u>{cookies.name}</u></b></li>
                    <li className="nav-item nav-link js-scroll-trigger" onClick={removeCook}>Logout</li>
                  </div>
                <div className="navbar-nav ml-auto">
                  </div>

              </ul>
            </div>
          </div>
    </nav>
  )
}
