import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Nav(props) {

  return (
    <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/builder">Builder</Link>
            </li>
            <li>
              <Link to="/session">Session</Link>
            </li>
          </ul>
        </nav>
  )
}
