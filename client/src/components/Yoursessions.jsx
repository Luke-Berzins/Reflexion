import "./Yoursessions.scss"
import UsersessionList from './UsersessionList'

export default function Yoursessions(props) {

  return (
    <div className="yoursessions">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="sessionList">
      <h1>Your Sessions:</h1>
      <UsersessionList />
      </div>
    </div>
  );

}
