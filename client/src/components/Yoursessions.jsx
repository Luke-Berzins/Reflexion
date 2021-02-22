import "./Yoursessions.scss"
import UsersessionList from './UsersessionList'

export default function Yoursessions(props) {


  return (
    <div id="sessions-wrapper" className="animate__animated animate__fadeIn">
      <div className="yourSessions">
        <div className="sessionList">
        <h1>Your Sessions:</h1>
        <br></br>
        <UsersessionList />
        <br></br>
        </div>
      </div>
    </div>
  );

}
