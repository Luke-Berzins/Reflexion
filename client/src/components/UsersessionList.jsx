import {useState, useEffect} from "react"
import axios from 'axios'
import { useCookies } from 'react-cookie';
import Usersession from './Usersession'

export default function Yoursessions(props) {
  const [cookies, setCookie] = useCookies(['name', 'id']);
  const [state, setState] = useState({
    yoursessions: [],
  })


  useEffect(() => {
    Promise.all([
      axios.get("/api/sequences/personal", {
        params: {
          user: cookies.id
        }
      })
    ]).then((all) => {
      setState(prev => ({...prev, yoursessions: all[0].data.sequences }));
    })
  }, []);
  const sequenceList = state.yoursessions.map(sequence => {
  return (
  <Usersession
      name={sequence.name}
      id={sequence.id} />
  )
  });
  return sequenceList;
}
