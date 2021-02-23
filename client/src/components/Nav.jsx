import './Nav.scss';
import NavAuth from './NavAuth'
import NavNotAuth from './NavNotAuth'

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
    <div>
      {cookies.id ? <NavAuth /> : <NavNotAuth />}
    </div>
  )
}
