import { useState, useEffect } from "react";
import axios from "axios";

export default function Login(props) {

  const [state, setState] = useState({
    user: "jimmy"
  })

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
    ]).then((all) => {
      const jim = all[0].data.users[0].firstname
      console.log(jim)
      setState(prev => ({...prev, user: jim }))
    })
  }, []);

  return (
    <div>

      <p>{state.user}</p>

    </div>
  )
}
