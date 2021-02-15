import { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../helpers/selectors";

export default function useAuthentication(login, register) {
  const [state, setState] = useState({
    user: null
  })
  const setUser = user => setState({ ...state, user });

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
    ]).then((all) => {
      if (login) {
        if (getUser(all[0].data.users, login.email, login.password)) {
          setUser(getUser(all[0].data.users, login.email, login.password));
        } else {
          return null;
        }
      } else if (register) {
        return "hello"
      }
    })
  }, []);



  return {
    state,
    setUser
  }
}
