import { useReducer, useState, useEffect } from "react";
import axios from "axios";
import useAuthentication from "../hooks/useAuthentication";


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }

export default function Login(props) {
  const [state, setState] = useState({
    user: null
  })
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 2000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });

  }


  return (
    <div>
<br></br>
<br></br>
<br></br>
      <p>{state.user}</p>
      <form name='name' onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" onChange={handleChange}/>
  </label>
  <label>
    Password:
    <input   type="text" name="password" onChange={handleChange}/>
  </label>
  {submitting &&
       <div>Submtting Form...</div>
     }
  <button type="submit">Submit</button>
  </form>
    </div>
  )
}
